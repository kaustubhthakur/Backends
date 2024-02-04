const Post =require('../models/Post')
const User = require('../models/User')
const upvote =async(req,res,next) => {
    try {
        const {id} = req.params;
        const {userId} = req.body;
        const post = await Post.findById(id);
        const isvoted = post.votes.get(userId);
        if(isvoted)
        {
            post.votes.delete(userId)
        }
        else 
        {
            post.votes.set(userId,true);
        }
        const updatePost = await Post.findByIdAndUpdate(
            is,{
                votes:post.votes
            },
            {new:true}
        );
       res.status(200).json(updatePost);
    } catch (error) {
        console.log(error)

    }
}
module.exports = {upvote}