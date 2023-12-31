const express = require('express')
const router = express.Router();
const {upVotes,downvotes} = require('../controllers/votes');
router.post('/:id',upVotes);
router.put('/:id',downvotes);
module.exports = router;