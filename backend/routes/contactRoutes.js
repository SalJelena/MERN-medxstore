const express = require("express")
const router = express.Router()

router.post("/", require("../controlers/contactControler/sendContactMessage"))

module.exports = router