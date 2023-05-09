const BrandsModel = require("../../model/brandModel")

const getAllBrands = (req, res) => {

    BrandsModel.aggregate([
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
                name: 1,
                products: 1,
                count: 1
            }
        }
    ])
        .then(data => res.send(data))
        .catch(err => console.log(err))
}

module.exports = getAllBrands