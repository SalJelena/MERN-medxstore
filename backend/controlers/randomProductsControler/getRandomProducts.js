const ProductModel = require("../../model/productModel")

const getRandomProducts = (req, res) => {
    const numberOfProducts = parseInt(req.params.number)

    ProductModel.find({})
        .then(data => {
            let copyData = [...data]
            let randomProducts = []

            for (let i = 0; i < numberOfProducts; i++) {
                let randomIndex = Math.floor(Math.random() * copyData.length)
                randomProducts.push(copyData[randomIndex])
                copyData.splice(randomIndex, 1)
            }
            res.send(randomProducts)
        })
        .catch(err => console.log(err))
}

module.exports = getRandomProducts