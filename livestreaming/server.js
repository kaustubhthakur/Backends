const express = require('express')
const app = express();
const cors = require('cors')
const multer = require('multer')
const { uuidv4 } = require("uuid");
const path = require("path")
const port = 9000;
const fs = require('fs');
const { exec } = require("child_process")
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + uuidv4() + path.extname
            (file.originalname))
    }
})
const upload = multer({ storage: storage })


app.use(cors({
    origin: ["http://localhost:9000", "http://localhost:5173"],
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static("uploads"))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
app.get('/', (req, res) => {
    res.status(201).json({ message: "hello" })
})
app.post("/upload", upload.single('file'), function (req, res) {
    const lessonid = uuidv4();
    const videopath = req.file.path
    const outputpath = `./uploads/courses/${lessonid}`
    const hlsPath = `${outputpath}/index.m3u8`
    console.log("hlspath", hlsPath)
    if (!fs.existsSync(outputpath)) {
        fs.mkdirSync(outputpath, { recursive: true })
    }
    const ffmpegCommand = `ffmpeg -i ${videopath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputpath}/segment%03d.ts" -start_number 0 ${hlspath}

    `;

    // no queue because of POC, not to be used in production
    exec(ffmpegCommand, (error, stdout, stderr) => {
        if (error) {
            console.log(`exec error: ${error}`)
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
        const videoUrl = `http://localhost:8000/uploads/courses/${lessonid}/index.m3u8`;

        res.json({
            message: "Video converted to HLS format",
            videoUrl: videoUrl,
            lessonId: lessonid
        })
    })
})
app.listen(port, () => {
    console.log(`server is running on port ${port}...`)
})