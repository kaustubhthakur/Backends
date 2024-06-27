const Cart = require('../models/Cart');
const Product = require('../models/Product');
const AddToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const userid = req.userId;
        const isproduct = await Cart.findOne({ productId });
        if (isproduct) {
            return res.json({
                message: "Already exits in Add to cart",
                success: false,
                error: true
            })
        }
        const payload = {
            productId: productId,
            quantity: 1,
            userId: userid,
        }
        const newproduct = new Product(payload);
        const saveproduct = await newproduct.save();
        res.status(201).json(saveproduct);
    } catch (error) {
        console.error(error);
    }
}
const AddToCartView = async (req, res) => {
    try {
        const userid = req.userId

        const allProduct = await Cart.find({
            userId: userid
        }).populate("productId")
        res.status(201).json(allProduct);
    } catch (error) {
        console.error(error);
    }
}
module.exports = { AddToCart, AddToCartView }