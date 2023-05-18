import React, {useEffect, useState} from 'react'
import CartService from "../../services/cartService";
import {useSelector} from "react-redux";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";
import PaymentElementComponent from "../../components/PaymentElementComponent/PaymentElementComponent";

const pk = "pk_test_51N944LINyKa3hdNSD0Vtav0aLfPRFCGZDcgBGmAspKF1qy6Nd7nXCGBKEytce32XiKQKlzehdNNwBl6xnPkUh7N300KpHSJNkG"
const stripe = loadStripe(pk)

const PaymentPage = () => {

    const {totalPrice} = useSelector(state => state.cartStore)
    const [ck, setCk] = useState(null)

    useEffect(() => {

        totalPrice > 0 && CartService.paymentInit({totalPrice, currency: "usd"})
            .then(res => setCk(res.data.client_secret))
            .catch(err => console.log(err))

    }, [totalPrice]);

    return (
        <div>
            <div className="wrap">
                <h2>PaymentPage</h2>
                {
                    ck && <Elements stripe={stripe} options={{clientSecret: ck}}>
                        <PaymentElementComponent ck={ck}/>
                    </Elements>
                }
            </div>
        </div>
    )
}
export default PaymentPage
