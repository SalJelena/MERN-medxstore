const express = require("express")
const router = express.Router()

router.post("/paymentInit", require("../controlers/cartControler/paymentInit"))

module.exports = router