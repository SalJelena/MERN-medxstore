const ProductModel = require("../../model/productModel")
const getSearchResults = (req, res) => {
    const searchTerm = req.query.term

    console.log(searchTerm)

    ProductModel.find({title: {$regex: searchTerm, $options: "i"}})
        .then(data => res.send(data))
        .catch(err => console.log(err))

}

module.exports = getSearchResults