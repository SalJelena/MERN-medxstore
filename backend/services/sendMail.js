const nodemailer = require("nodemailer")
const {activationMailTemplate} = require("../mailTemplates/mailTemplate");

const password = process.env.MAIL_PASSWORD

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "ecommercesalopek@gmail.com",
        pass: password
    }
})

const sendActivationMail = (email, verifyLink) => {

    let message = {
        from: 'ECOMMERCE SALOPEK <ecommercesalopek@gmail.com>',
        to: email,
        subject: 'Activate your account',
        html: activationMailTemplate(verifyLink)
    }

    return transporter.sendMail(message)

}

module.exports = {sendActivationMail}
