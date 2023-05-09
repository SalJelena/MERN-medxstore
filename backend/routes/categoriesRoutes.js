const express = require("express")
const router = express.Router()

router.get("/all", require("../controlers/categoriesControler/getAllCategories"))

module.exports = router