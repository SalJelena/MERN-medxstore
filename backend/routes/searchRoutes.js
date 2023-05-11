const express = require("express")
const router = express.Router()

router.get("/", require("../controlers/searchResultsControler/getSearchResults"))

module.exports = router