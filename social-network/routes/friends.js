const express = require('express')
const router = express.Router();
const {addFriend,removeFriend} = require('../controllers/friends');
router.post('/:id',addFriend);
router.delete('/:id',removeFriend);
module.exports = router;