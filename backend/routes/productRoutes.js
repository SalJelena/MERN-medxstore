const express = require("express")
const router = express.Router()

router.get("/all", require("../controlers/ProductControler/getAllProducts"))
router.get("/:limit/:page", require("../controlers/ProductControler/productsPagination"))
router.get("/filtercategory", require("../controlers/ProductControler/productsCategory"))
router.get("/filterbrand", require("../controlers/ProductControler/brandCategory"))
router.get("/:id", require("../controlers/ProductControler/getSingleProduct"))


module.exports = router