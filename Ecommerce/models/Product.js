const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
    },
    brandname: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

})
module.exports = mongoose.model("Post", ProductSchema);