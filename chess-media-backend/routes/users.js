const express = require('express')
const router = express.Router()
const {getUser,getAllUsers,updateUser,deleteUser} = require('../controllers/users')
router.delete('/:id',deleteUser)
router.put('/:id',updateUser)
router.put('/:id',getUser)
router.put('/',getAllUsers)
module.exports = router;