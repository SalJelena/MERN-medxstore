const ProductModel = require("../../model/productModel")
const getSingleProduct = (req, res) => {
    const productId = req.params.id

    // ProductModel.findOne({_id: productId})
        ProductModel.aggregate(
            [
                {$addFields: {convertedId: {$toString: "$_id"} }},
                {$match: {convertedId: productId}},
                {
                    $lookup: {
                        from: "categories",
                        localField: "category",
                        foreignField: "_id",
                        as: "categoryName",
                        pipeline: [
                            {$project: {name: 1}}
                        ]
                    }
                },
                {
                    $lookup: {
                        from: "brands",
                        localField: "brand",
                        foreignField: "_id",
                        as: "brandName",
                        pipeline: [
                            {$project: {name: 1}}
                        ]
                    }
                },
                {
                    $project: {category: 0, brand: 0}
                }
            ]
        )
        .then((product) => res.send(product[0]))
        .catch(err => res.send(err))

}

module.exports = getSingleProduct