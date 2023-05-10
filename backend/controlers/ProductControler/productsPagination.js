const ProductModel = require("../../model/productModel");

const pagination = async (req, res) => {
    const limit = parseInt(req.params.limit)
    const page = parseInt(req.params.page)
    const sort = req.params.sort ? req.params.sort : null

    let count = await ProductModel.count({})

    ProductModel.find({}, null, {
        limit: limit,
        skip: (page - 1) * limit
    })
        .sort({price: sort})
        .then((products) => {
            res.send({products, count})
        })
        .catch((err) => console.log(err))
}

module.exports = pagination