const express = require("express")
const router = express.Router()
const {decodedToken} = require("../middleware/authToken");

router.post("/paymentInit", require("../controlers/cartControler/paymentInit"))
router.post("/orders/add", require("../controlers/cartControler/addNewOrder"))
router.get("/orders/all", decodedToken, require("../controlers/cartControler/allOrders")
)

module.exports = router
