const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    image: {type: String, default: null},
    isAdmin: {type: Boolean, default: false},
    isActivated: {type: Boolean, default: false},
    createdAt: {type: Date, default: () => new Date().getTime()},
    favorites: {type: Array, default: []}
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
