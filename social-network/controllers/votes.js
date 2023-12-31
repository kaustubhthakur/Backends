const Post = require('../models/Post')
const upVotes = async(req,res) => {
    if (req.body.postId !== req.params.id) {
        try {
          const post = await Post.findById(req.params.id);
         
          if (!post.upvotes.includes(req.body.postId)) {
            await post.updateOne({ $push: { upVotes: req.body.postId } });
            
            res.status(200).json("your liked the post");
          } 
        
          else {
            res.status(403).json("you already upvotes this post");
          }
        } catch (err) {
          res.status(500).json(err);
        }
      } 
    
}
const downvotes = async(req,res,next) => {
    if (req.body.userId !== req.params.id) {
        try {
          const post = await Post.findById(req.params.id);
         
          if (post.downvotes.includes(req.body.postId)) {
            await post.updateOne({ $pull: { downvotes: req.body.postId } });

            res.status(200).json("user has been downvoted");
          } else {
            res.status(403).json("you never downvoted");
          }
        } catch (err) {
          res.status(500).json(err);
        }
      } 
}
module.exports = {downvotes,upVotes}