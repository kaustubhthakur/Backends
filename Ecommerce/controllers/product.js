const Product = require('../models/Product')
const createproduct = async(req,res)=>
    {
        try {
            const newproduct = new Product(req.body);
            const saveproduct = await newproduct.save();
            res.status(201).json(saveproduct);
        } catch (error) {
            console.error(error)
        }
    }
  
    const getProducts = async(req,res)=> 
        {
            try {
                const product = await Product.find();
                res.status(201).json(product);
            } catch (error) {
                console.error(error)
            }
        }

        module.exports = {createproduct,getProducts}