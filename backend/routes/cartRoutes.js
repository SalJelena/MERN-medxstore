const express = require("express")
const router = express.Router()

router.post("/paymentInit", require("../controlers/cartControler/paymentInit"))
router.post("/orders/add", require("../controlers/cartControler/addNewOrder"))

module.exports = router