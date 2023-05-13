const verifyToken = (req, res, next) => {
    if (req.headers.Authorization) {
        next()
    } else {
        res.status(201).send({msg: "You must be logged in."})
    }
}

module.exports = {verifyToken}