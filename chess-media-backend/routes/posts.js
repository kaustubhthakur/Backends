const express = require('express')
const router = express.Router()
const {getPost,getAllPosts,updatePost,deletePost,createPost} = require('../controllers/posts')
router.delete('/:id',deletePost)
router.put('/:id',updatePost)
router.put('/:id',getPost)
router.put('/',getAllPosts)
router.post('/',createPost)
module.exports = router;