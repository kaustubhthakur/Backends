const express = require('express')
const mongoose = require('mongoose')
const port = 8080;
require('dotenv').config();
const app = express();


const connection = async(next) => {
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('database is connected...');
} catch (error) {
    next(error)
}
}
app.listen(port,() => {
    console.log('server is running on port 8080....')
})