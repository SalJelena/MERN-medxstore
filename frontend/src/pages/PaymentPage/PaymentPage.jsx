import React, {useEffect, useState} from 'react'
import CartService from "../../services/cartService";
import {useSelector} from "react-redux";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";
import PaymentElementComponent from "../../components/PaymentElementComponent/PaymentElementComponent";
import {Link} from "react-router-dom";
import {BiMessageSquareError} from "react-icons/bi";

const pk = "pk_test_51N944LINyKa3hdNSD0Vtav0aLfPRFCGZDcgBGmAspKF1qy6Nd7nXCGBKEytce32XiKQKlzehdNNwBl6xnPkUh7N300KpHSJNkG"
const stripe = loadStripe(pk)

const PaymentPage = () => {

    const {cart, totalPrice} = useSelector(state => state.cartStore)
    const [ck, setCk] = useState(null)

    useEffect(() => {

        totalPrice > 0 && CartService.paymentInit({totalPrice: totalPrice * 100, currency: "usd"})
            .then(res => setCk(res.data))
            .catch(err => console.log(err))

    }, [totalPrice]);

    const renderedSummary = () => {
        return cart.map((el, index) => {
            return <li key={index} className="checkout__summary-item">
                <img src={el.thumbnail} alt={el.title} className="checkout__summary-img"/>
                <Link to={`/product/${el._id}`} className="checkout__summary-product">{el.title}</Link>
                - <span className="checkout__summary-price">quantity {el.quantity}x{el.price}$</span>
            </li>
        })
    }

    return (
        <div className="payment">
            <div className="wrap">
                <h2 className="payment__title">Payment</h2>
                <div className="payment__wrapper">
                    <div className="checkout__summary">
                        <h2 className="checkout__title">Order Summary</h2>
                        <ul className="checkout__summary-list">
                            {renderedSummary()}
                            <li className="checkout__summary-total">Total Price: <span
                                className="checkout__summary-number">{totalPrice}$</span></li>
                        </ul>
                        <div className="checkout__disclaimer">
                            <span className="checkout__exclaimer">
                                <BiMessageSquareError/>
                            </span>
                            <p className="checkout__explanation">Disclaimer, this is for developer purposes only. No
                                real
                                items will be sold. Please do not use real credit card for payments, only Stripe test
                                cards, which can be found <a
                                    href="https://stripe.com/docs/testing#international-cards" target="_blank"
                                    rel="noreferrer">here.</a></p>
                        </div>
                    </div>
                    {
                        ck && <Elements stripe={stripe} options={{clientSecret: ck}}>
                            <PaymentElementComponent ck={ck}/>
                        </Elements>
                    }
                </div>

            </div>
        </div>
    )
}
export default PaymentPage
