import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeQuantityCart, removeFromCart} from "../../store/cartSlice";
import {MdOutlineClose} from "react-icons/md";
import {Link} from "react-router-dom";
import {routes} from "../../router/routes";

const CartPage = () => {
    const {cart, totalPrice} = useSelector(state => state.cartStore)
    const dispatch = useDispatch()

    const incrementQuantityHandler = (el, id, count) => {
        if (count === 1) {
            dispatch(changeQuantityCart({id, count}))
        } else if (count === -1 && el.quantity > 1) {
            dispatch(changeQuantityCart({id, count}))
        }
    }

    const renderProducts = () => {
        return cart.map((el, index) => {
            return (<tr key={el._id} className="cart-table__row">
                <td className="cart-table__data">
                    <img src={el.thumbnail} alt={el.title} className="cart-table__img"/>
                </td>
                <td className="cart-table__data cart-table__data-title">
                    <span>{el.title}</span>
                </td>
                <td className="cart-table__data cart-table__data-price">
                    <span>{el.price}$</span>
                </td>
                <td className="cart-table__data">
                    <div className="product__quantity-control">
                        <button
                            onClick={() => incrementQuantityHandler(el, el._id, -1)}
                            className="product__quantity-btn"
                        >
                            -
                        </button>
                        <span className="product__quantity">{el.quantity}</span>
                        <button onClick={() => incrementQuantityHandler(el, el._id, 1)}
                                className="product__quantity-btn">+
                        </button>
                    </div>
                </td>
                <td className="cart-table__data cart-table__data-price">
                    <span>{el.total}$</span>
                </td>
                <td className="cart-table__data">
                    <button onClick={() => dispatch(removeFromCart(el._id))}>
                        <MdOutlineClose/>
                    </button>
                </td>
            </tr>)
        })
    }

    return (
        <div className="cart-page">
            <div className="wrap">
                <div className="cart-table__holder">
                    <table className="cart-table">
                        <thead className="cart-table__header">
                        <tr className="cart-table__row">
                            <th className="cart-table__title">Photo</th>
                            <th className="cart-table__title">Product</th>
                            <th className="cart-table__title">Price</th>
                            <th className="cart-table__title">Quantity</th>
                            <th className="cart-table__title">Total</th>
                        </tr>
                        </thead>
                        <tbody className="cart-table__body">
                        {renderProducts()}
                        </tbody>
                        <tfoot className="cart-table__foot">
                        <tr className="cart-table__foot-row">
                            <td colSpan={4} className="cart-table__total">Total:</td>
                            <td className="cart-table__total-price">{totalPrice}$</td>
                            <td></td>
                        </tr>
                        </tfoot>
                    </table>
                    <Link to={routes.AUTH.path}
                          className="button button--secondary button--rounded cart-table__btn-checkout">Continue to
                        checkout</Link>
                </div>
            </div>
        </div>
    )
}
export default CartPage
