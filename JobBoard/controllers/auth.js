const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt=require('bcryptjs')
require('dotenv').config();
const register = async(req,res,next)=> {
var salt = bcrypt.genSaltSync(10)
var hash = bcrypt.hashSync(req.body.password,salt);
    try {
const newuser = new User({
    username:req.body.username,
    email:req.body.email,
    password:hash
})    
const saveuser = await newuser.save();
res.status(201).json(saveuser)
} catch (error) {
    next(error);
}
}
const login = async(req,res,next) => {

}
const logout = async(req,res,next) => {

}
module.exports = {register,login,logout}