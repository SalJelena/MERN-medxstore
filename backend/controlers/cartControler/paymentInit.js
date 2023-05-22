const sk = process.env.SK
const stripe = require("stripe")(sk)

const paymentInit = async (req, res) => {

    try {

        const payment = await stripe.paymentIntents.create({
            amount: req.body.totalPrice,
            currency: req.body.currency,
            automatic_payment_methods: {
                enabled: true
            }
        })

        res.send(payment.client_secret)

    } catch (error) {
        res.status(415).send(error)
    }

}

module.exports = paymentInit
