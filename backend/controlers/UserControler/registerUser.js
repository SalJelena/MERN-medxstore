const UserModel = require("../../model/userModel")
const bcrypt = require("bcrypt")
const {sendActivationMail} = require("../../services/sendMail");
const saltRounds = 10

const registerUser = async (req, res) => {
    const {email, password} = req.body
    const reqBody = req.body

    const isExist = await UserModel.count({email})

    if (isExist > 0) {
        res.status(201).send({msg: "User exists with this email."})
    } else {
        let passwordHash = await bcrypt.hash(password, saltRounds)
        let newUser = new UserModel({...reqBody, password: passwordHash})

        newUser.save()
            .then(user => {
                let verifyLink = "http://localhost:3000/user/activate/" + user._id

                sendActivationMail(email, verifyLink)
                    .then(data => {
                        res.send({msg: "User registered"})
                    })
                    .catch(err => {
                        res.status(415).send({msg: "Something went wrong with activation link"})
                    })

            })
            .catch(err => {
                res.status(415).send(err)
            })
    }
}

module.exports = registerUser