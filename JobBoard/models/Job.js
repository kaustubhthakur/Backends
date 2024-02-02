const mongoose = require('mongoose')
const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        default: 0,
        required: true,
    },
    description: {
        type: [String],
        required: true,
    },
    location: {
        type: [String],
        required: true,
    },
    jobpost: {
        type: String,
        required: true,
    }
})