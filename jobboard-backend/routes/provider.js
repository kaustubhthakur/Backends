const express = require('express')
const {verifyUser} = require('../utils/verifyToken')
const router  = express.Router();
const {createJob,updateJob,deleteJob} = require('../controllers/jobprovider')
router.post("/", createJob);
router.put("/:id",  updateJob)
router.delete("/:id", deleteJob);
module.exports = router;