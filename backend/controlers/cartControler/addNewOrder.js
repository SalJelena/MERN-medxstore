const OrderModel = require("../../model/orderModel");
const addNewOrder = (req, res) => {


    const newOrder = new OrderModel(req.body)

    newOrder.save()
        .then((order) => {
            res.send(order)
        })
        .catch((err) => {
            console.log(err)
            res.status(415).send(err.message)
        })

}

module.exports = addNewOrder