const activationMailTemplate = (verifyLink) => {
    return `<p>Activate your account</p>
    <a href="${verifyLink}">Click here</a>`
}

module.exports = {activationMailTemplate}