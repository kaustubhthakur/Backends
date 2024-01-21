const mongoose = require('mongoose')
const User = require('../../social-network/models/User')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: "AlexFerguson"
    },
    email: {
        type: String,
        required: true,
        default: "saf@3gmail.com",
    },
    password: {
        type: String,
        required: true,

    }
})
module.exports = mongoose.model("User", UserSchema);