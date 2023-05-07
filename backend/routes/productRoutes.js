const express = require("express")
const router = express.Router()

router.get("/all", require("../controlers/ProductControler/getAllProducts"))
router.get("/:limit/:page", require("../controlers/ProductControler/productsPagination"))


module.exports = router