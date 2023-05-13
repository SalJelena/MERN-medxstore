const express = require("express");
const router = express.Router();


/***** GET *****/


/***** POST *****/
router.post("/register", require("../controlers/UserControler/registerUser"))
router.post("/login", require("../controlers/UserControler/loginUser"))

/***** PUT *****/
router.put("/activate/:id", require("../controlers/UserControler/activateAccount"))

module.exports = router;