const OrderModel = require("../../model/orderModel");
const allOrders = (req, res) => {
    let userId = req.locals.id

    OrderModel.find({userId: userId})
        .then(data => res.send(data))
        .catch(error => res.status(415).send({msg: "Error retrieving data."}))

}

module.exports = allOrders
