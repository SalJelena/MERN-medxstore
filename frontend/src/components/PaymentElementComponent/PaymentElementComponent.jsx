import React from 'react'
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {toast} from "react-toastify";
import {routes} from "../../router/routes";

const PaymentElementComponent = ({ck}) => {
    const stripe = useStripe()
    const elements = useElements()

    const handlePay = () => {
        if (!stripe || !elements || !ck) {
            return toast.error("Error while payment.")
        }
        stripe.confirmPayment({
            elements: elements,
            confirmParams: {
                return_url: routes.ORDER_INIT.url
            }
        })
    }

    return (
        <div>
            <PaymentElement/>
            <button onClick={handlePay}>Pay</button>
        </div>
    )
}
export default PaymentElementComponent
