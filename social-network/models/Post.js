const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: [String],
        required: true,
    },
    comments: {
        type: [String],
        default: [],
    },
    upvotes: {
        type: Number,
        default: 0,
    }, 
    downvotes: {
        type: Number,
        default: 0,
    },
    createdAt:{
        type:Number,
        default:Date.now,
    }
})
module.exports = mongoose.model("Post",PostSchema);