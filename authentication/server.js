const express = require('express')
const port = 4040;
const app = express();
const cors = require('cors')
const authRouter = require('./routes/auth')
const mongoose = require('mongoose')
require('dotenv').config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('database is connected... ');
    } catch (error) {
        console.log(error);
    }
}
connection()
app.use(express.json());
app.use('/auth',authRouter)
app.listen(port, () => {
    console.log(`server is running on port ${port}...`);
})