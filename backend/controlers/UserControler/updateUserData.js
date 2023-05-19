const UserModel = require("../../model/userModel");
const updateUserData = (req, res) => {
    let updatedUser = {...req.body}

    UserModel.findOneAndUpdate(
        {_id: updatedUser._id},
        {
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            address: updatedUser.address,
            city: updatedUser.city,
            phone: updatedUser.phone,
            postCode: updatedUser.postCode,
            email: updatedUser.email
        },
        {new: true, projection: {password: 0}}
    )
        .then(user => console.log(user))
        .catch(err => res.status(415).send(err))


}

module.exports = updateUserData