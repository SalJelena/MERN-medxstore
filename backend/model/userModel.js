const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, default: null },
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: () => new Date().getTime() }
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
