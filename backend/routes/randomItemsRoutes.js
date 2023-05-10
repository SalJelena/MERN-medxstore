const express = require("express")
const router = express.Router()

router.get("/:number", require("../controlers/randomProductsControler/getRandomProducts"))


module.exports = router