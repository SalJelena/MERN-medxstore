const ContactModel = require("../../model/contactModel")

const sendContactMessage = (req, res) => {
    const {name, email, message} = req.body

    const contactMessage = {
        name, email, message
    }

    const newMessage = new ContactModel(contactMessage)

    newMessage.save()
        .then(data => res.status(200).json({success: true, message: 'Contact message saved successfully.'}))
        .catch(error => res.status(412).json({success: false, message: 'Error saving contact message.'}))
}

module.exports = sendContactMessage