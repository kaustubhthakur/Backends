const jwt = require("jsonwebtoken")
const createError = require('../utils/error')
require('dotenv').config()
const verifyToken = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "not authenticated one"));
    }
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            return next(createError(403, "invalid token"));
            req.user = user;
            next()
        }
    });
}
const verifyUser = async (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            if (err) return next(createError(403, "you are not authorized"));
        }
    })
}
const verifyAdmin = async (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            if (err) return next(createError(403, "you are not authorized"));
        }
    })
}
module.exports = { verifyToken, verifyUser, verifyAdmin }