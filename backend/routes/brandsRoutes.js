const express = require("express")
const router = express.Router()

router.get("/all", require("../controlers/brandsControler/getAllBrands"))

module.exports = router