const CategoriesModel = require("../../model/categoryModel")
const getAllCategories = (req, res) => {

    CategoriesModel.aggregate([
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
                name: 1,
                products: 1,
                count: 1
            }
        }
    ])
        .then(data => res.send(data))
        .catch(err => console.log(err))
}

module.exports = getAllCategories