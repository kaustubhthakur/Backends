const express = require('express')
const router = express.Router();
const {createPost,deletePost,updatePost,getAllPosts,getPost} = require('../controllers/posts');
router.post('/',createPost);
router.put('/:id',deletePost);
router.patch('/:id',updatePost)
router.get('/:id',getPost);
router.get('/',getPost);
module.exports = router;