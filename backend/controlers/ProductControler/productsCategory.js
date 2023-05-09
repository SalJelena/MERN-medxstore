const CategoryModel = require("../../model/categoryModel")

const productsCategory = (req, res) => {
    const limit = parseInt(req.query.limit)
    const page = (parseInt(req.query.page) - 1) * limit
    const category = req.query.category

    CategoryModel.aggregate([
        {
            $match: {name: category}
        },
        {
            $lookup: {
                from: "products",
                localField: "_id",
                foreignField: "category",
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

module.exports = productsCategory