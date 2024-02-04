const express = require('express')
const router = express.Router()
const {upvote} = require('../controllers/votes')
router.post('/:id',upvote)

module.exports = router;