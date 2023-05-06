const express = require("express")
const router = express.Router()

router.use("/user", require("./userRoutes"));
router.use("/products", require("./productRoutes"))

module.exports = router;