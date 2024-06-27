const mongoose = require('mongoose')
const CartSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    quantity: Number,
    userId:
    {
        type: String,
        required: true,
    },

}
)
module.exports = mongoose.Schema("Cart", CartSchema)