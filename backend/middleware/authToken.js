const jwt = require("jsonwebtoken")
const {privateKey} = require("../config/configVars");

const verifyToken = (req, res, next) => {
    if (req.headers.authorization) {
        next()
    } else {
        res.status(201).send({msg: "You must be logged in."})
    }
}

const decodedToken = (req, res, next) => {

    if (req.headers.authorization) {
        let token = req.headers.authorization
        jwt.verify(token, privateKey, null, (err, decoded) => {
            let user = decoded
            req.locals = decoded
        })
    }

    next()
}

module.exports = {verifyToken, decodedToken}
