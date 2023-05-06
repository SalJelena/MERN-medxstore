const ProductModel = require("../../model/productModel")


const allProducts = (req, res) => {

    ProductModel.find({})
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error)
        })
}

module.exports = allProducts