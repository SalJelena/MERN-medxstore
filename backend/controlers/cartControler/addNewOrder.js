const OrderModel = require("../../model/orderModel");


const addNewOrder = (req, res) => {

    let reqBody = {...req.body}


    const newOrder = new OrderModel(reqBody)

    newOrder.save()
        .then((order) => {
            res.send(order)
        })

        .catch((error) => {
            console.log(error)
            res.status(415).send(error.message)
        })

}

module.exports = addNewOrder
