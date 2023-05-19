const express = require("express");
const router = express.Router();
const {verifyToken} = require("../middleware/authToken");

/***** GET *****/


/***** POST *****/
router.post("/register", require("../controlers/UserControler/registerUser"))
router.post("/login", require("../controlers/UserControler/loginUser"))

/***** PUT *****/
router.put("/activate/:id", require("../controlers/UserControler/activateAccount"))
router.put("/addToFavorite", verifyToken, require("../controlers/UserControler/addToFavorite"))
router.put("/removeFromFavorite", verifyToken, require("../controlers/UserControler/removeFromFavorite"))
router.put("/updateUser", verifyToken, require("../controlers/UserControler/updateUserData"))

module.exports = router;