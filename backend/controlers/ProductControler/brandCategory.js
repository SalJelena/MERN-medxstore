const BrandModel = require("../../model/brandModel")

const brandCategory = (req, res) => {
    const limit = parseInt(req.query.limit)
    const page = (parseInt(req.query.page) - 1) * limit
    const brand = req.query.brand

    BrandModel.aggregate([
        {
            $match: {name: brand}
        },
        {
            $lookup: {
                from: "products",
                localField: "_id",
                foreignField: "brand",
                as: "products"
            }
        },
        {
            $addFields: {count: {$size: "$products"}}
        },
        {
            $project: {
                products: {$slice: ["$products", page, limit]},
                count: 1
            }
        }

    ]).then(result => {
        res.send(result[0])
    })
        .catch(err => {
            res.status(415).send(err)
        })

}

module.exports = brandCategory