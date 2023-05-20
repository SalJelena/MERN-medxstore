const sk = "sk_test_51N944LINyKa3hdNSkxcoVjftPa7AVIIzEC0f7d5V9RnXvFR6HJukSOVuk8awyFKP7z817bHk34PV7qlTvhoGDqIB00p7dMHk4R"
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
