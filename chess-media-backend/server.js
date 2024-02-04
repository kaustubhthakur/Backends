const express = require('express')
const port = 4000
const app =express();
const cors = require('cors')
const cookieparser = require('cookie-parser')
require('dotenv').config()
const mongoose = require('mongoose')
const authrouter = require('./routes/auth')
const userrouter = require('./routes/users')
const postrouter = require('./routes/posts')
const voteRouter = require('./routes/votes')
app.use(express.json());
app.use(cors())
app.use(cookieparser())


const connection = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('database is connected....')
    } catch (error) {
        console.log(error);
    }
}
connection();
app.use('/auth',authrouter)
app.use('/posts',postrouter)
app.use('/users',userrouter)
app.use('/votes',voteRouter)
app.listen(port,() => {
    console.log(`server is running on port ${port}...`)
})