const express = require('express')
const app = express();
const port = 5000;
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieparser = require('cookie-parser')
app.use(express.json())
app.use(cors())
const authRouter = require('./routes/auth')
app.use(cookieparser())



const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`database is connected to port ${port}...`)
    } catch (error) {
        console.log(error)
    }
}
app.use('/auth',authRouter)
app.listen(port, () => {
    console.log(`server is running on port ${port}...`)
})
connection();

