const User = require('../models/User')
const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Your Query has been deleted.");
    } catch (error) {
        next(error)
    }
}
const updateUser = async (req, res, next) => {
    try {
        const updateduser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateduser);
    } catch (error) {
        next(error)
    }
}
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(users);
    } catch (error) {
        next(error)
    }
}
module.exports = { createUser, updateUser, deleteUser, getAllUsers, getUser }