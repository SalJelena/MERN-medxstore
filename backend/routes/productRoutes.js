const express = require("express")
const router = express.Router()

router.get("/all", require("../controlers/ProductControler/getAllProducts"))


module.exports = router