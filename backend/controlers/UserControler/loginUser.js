const UserModel = require("../../model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const privateKey = process.env.JWT_KEY

const loginUser = (req, res) => {
    const {email, password} = req.body

    UserModel.findOne({email}, null, {lean: true})
        .then((user) => {
            if (user && user.isActivated) {

                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.status(404).send(err)
                    } else if (result) {
                        delete (user.password)

                        jwt.sign({
                            id: user._id,
                            isAdmin: user.isAdmin
                        }, privateKey, {algorithm: 'HS256'}, (err, token) => {
                            res.send({user, token})
                        })

                    } else {
                        res.status(201).send({msg: "Your email and password do not match."})
                    }
                })

            } else if (user && !user.isActivated) {
                res.status(201).send({msg: "Your account is not activated."})
            } else {
                res.status(201).send({msg: "User does not exist."})
            }

        })
        .catch((error) => {
            res.status(404).send(error)
        })

}

module.exports = loginUser
