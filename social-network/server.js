const express = require('express');

const app = express();
const port = 9999;
const mongoose = require('mongoose');
require('dotenv').config();
const authRouter  = require('./routes/auth')
const postRouter  = require('./routes/posts')
const friendsRouter = require('./routes/friends')
const voteRouter  = require('./routes/votes')
app.use(express.json());
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/posts',postRouter);
app.use('/api/v1/friends',friendsRouter)
app.use('/api/v1/votes',voteRouter)

const connection = async() => {
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('database is connected...');
} catch (error){
    throw error ;
}
}
app.listen(port,() =>{
console.log(`server is running on port ${port}...`)
})