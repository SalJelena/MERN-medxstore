import React from 'react'
import {removeFromCart} from "../../store/cartSlice";
import {Link} from "react-router-dom";
import {routes} from "../../router/routes";
import {useDispatch, useSelector} from "react-redux";
import {RiDeleteBinLine} from "react-icons/ri";
import {MdOutlineClose} from "react-icons/md";
import {FaRegCheckCircle} from "react-icons/fa";

const Cart = ({cartModalOpened, onOpen}) => {

    const {cart, totalPrice} = useSelector(store => store.cartStore)
    const dispatch = useDispatch()

    const renderCartItems = () => {
        return cart?.map(el => {
            return (<li key={el._id} className="cart-view__item">
                <img src={el.thumbnail} alt={el.title} className="cart-view__img"/>
                <div className="cart-view__text">
                    <span className="cart-view__title">{el.title}</span>
                    <span className="cart-view__quantity">Quantity: {el.quantity}</span>
                </div>
                <button onClick={() => dispatch(removeFromCart(el._id))} className="cart-view__delete">
                    <RiDeleteBinLine/>
                </button>
            </li>)
        })
    }

    return (
        <>
            <div className={`nav__cart-view cart-view ${cartModalOpened ? "cart-view--opened" : ""}`}>
                <h4 className="cart-view__main-title">Your Cart</h4>
                <button onClick={onOpen} className="cart-view__close">
                    <MdOutlineClose/>
                </button>
                {
                    cart.length !== 0 ?
                        <>
                            <ul className="cart-view__list">
                                {renderCartItems()}
                                <li className="cart-view__total">Total: <span
                                    className="cart-view__total-bold">{totalPrice}$</span>
                                </li>
                                <Link to={routes.CART.path} className="button button--primary cart-view__btn"
                                      onClick={onOpen}>Continue
                                    checkout</Link>
                            </ul>
                        </>
                        :
                        <h4 className="cart-view__main-title">You have no products in cart.</h4>
                }
            </div>
            <div className="cart-view__overlay"/>
        </>
    )
}
export default Cart
