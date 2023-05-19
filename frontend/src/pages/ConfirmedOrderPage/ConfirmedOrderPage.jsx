import React, {useEffect} from 'react'
import CartService from "../../services/cartService";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const ConfirmedOrderPage = () => {
    const [searchParams] = useSearchParams()
    const {user} = useSelector(state => state.usersStore)
    const {cart, totalPrice} = useSelector(state => state.cartStore)

    const isSuccess = searchParams.get("redirect_status") === "succeeded"

    useEffect(() => {
        let products = cart.map(el => {
            return {
                productId: el._id,
                title: el.title,
                price: el.price,
                quantity: el.quantity
            }
        })


        isSuccess && CartService.addNewOrder({
            ...user, totalPrice, products
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => console.log(error))

    }, [user, cart])

    return (
        <div>ConfirmedOrderPage</div>
    )
}
export default ConfirmedOrderPage
