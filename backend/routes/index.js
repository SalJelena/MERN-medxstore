const express = require("express")
const router = express.Router()

router.use("/user", require("./userRoutes"));
router.use("/products", require("./productRoutes"))
router.use("/categories", require("./categoriesRoutes"))
router.use("/brands", require("./brandsRoutes"))
router.use("/random", require("./randomItemsRoutes"))
router.use("/results", require("./searchRoutes"))
router.use("/contact", require("./contactRoutes"))

module.exports = router;