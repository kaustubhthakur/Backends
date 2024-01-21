const Post = require('../models/Post')
 const createPost = async (req, res, next) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    next(err);
  }
};
const updatePost = async (req, res, next) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    next(err);
  }
};
 const deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post has been deleted.");
  } catch (err) {
    next(err);
  }
};
 const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};
 const getAllPosts = async (req, res, next) => {

  try {
    const posts = await Post.find()
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};
module.exports = {createPost,deletePost,updatePost,getAllPosts,getPost};