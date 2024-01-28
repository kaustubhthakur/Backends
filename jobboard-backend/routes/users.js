const express = require('express')
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/users")
const {verifyAdmin,verifyUser,verifyToken} = require('../utils/verifyToken')
const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);

module.exports = router;