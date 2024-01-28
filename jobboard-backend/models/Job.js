const mongoose = require('mongoose')
const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        default: "xyzcompany@gmail.com",
    },
    skillset: {
        type: [String],
        required: true,
    },
    salary: {
        type: Number,
        required: true,
        default: 10000,
    },
    location: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

})
module.exports = mongoose.model("Job", JobSchema)