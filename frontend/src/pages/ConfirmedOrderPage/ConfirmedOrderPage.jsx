import React, {useEffect} from 'react'
import CartService from "../../services/cartService";
import {useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";

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

        let userOrder = {
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            address: user.address,
            city: user.city,
            postCode: user.postCode
        }

        isSuccess && CartService.addNewOrder({
            ...userOrder, totalPrice, products
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => console.log(error))

    }, [user, cart])

    const renderedSummary = () => {
        return cart.map((el, index) => {
            return <li key={index} className="checkout__summary-item">
                <img src={el.thumbnail} alt={el.title} className="checkout__summary-img"/>
                <Link to={`/product/${el._id}`} className="checkout__summary-product">{el.title}</Link>
                - <span className="checkout__summary-price">quantity {el.quantity}x{el.price}$</span>
            </li>
        })
    }

    const renderedUserDetails = () => {
        return (
            <div>
                <p className="order__text"><span className="order__subtext">Name: </span>{user.firstName}</p>
                <p className="order__text"><span className="order__subtext">Last Name: </span>{user.lastName}</p>
                <p className="order__text"><span className="order__subtext">Email: </span>{user.email}</p>
                <p className="order__text"><span className="order__subtext">Phone: </span>{user.phone}</p>
                <p className="order__text"><span className="order__subtext">Address: </span>{user.address}</p>
                <p className="order__text"><span className="order__subtext">City: </span>{user.city}</p>
                <p className="order__text"><span className="order__subtext">Postcode: </span>{user.postCode}</p>
            </div>
        )
    }

    return (
        <div className="order">
            <div className="wrap">
                <div className="order__inner">
                    <h2 className="order__title">Order</h2>
                    {
                        isSuccess ?
                            <div className="order__wrapper">
                                <h3 className="order__subtitle">Your order is confirmed.</h3>
                                <div className="order__details">
                                    <div className="order__checkout">
                                        <h3 className="order__subtitle">Summary:</h3>
                                        <ul className="checkout__summary-list">
                                            {renderedSummary()}
                                            <li className="checkout__summary-total">Total Price: <span
                                                className="checkout__summary-number">{totalPrice}$</span></li>
                                        </ul>
                                    </div>
                                    <div className="order__user">
                                        <h3 className="order__subtitle">Delivery Instructions:</h3>
                                        {renderedUserDetails()}
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                <h3>Something went wrong with order.</h3>
                            </div>
                    }
                </div>
            </div>
        </div>

    )
}
export default ConfirmedOrderPage
