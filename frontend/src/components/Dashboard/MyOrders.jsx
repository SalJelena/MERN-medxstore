import React, {useEffect, useState} from 'react'
import CartService from "../../services/cartService";

const MyOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {

        CartService.getAllOrders()
            .then(res => setOrders(res.data))
            .catch(err => console.log(err))

    }, []);

    const renderedProducts = (products) => {
        return products.map(el => {
            return <div key={el.productId} className="orders__product">
                <span className="orders__product-title">{el.title}</span>
                <span className="orders__quantity">{el.quantity}x{el.price}$</span>
            </div>
        })
    }

    const renderedOrders = () => {
        return orders.map((order, index) => {
            return (
                <div key={order._id} className="orders__item">
                    <h3 className="orders__name">Order #{index + 1}</h3>
                    <div className="orders__products-all">
                        {renderedProducts(order.products)}
                    </div>
                    <p className="orders__desc">Delivery Instructions:</p>
                    <p className="orders__text">{order.address}, {order.postCode}, {order.city}, {order.phone}</p>
                    <p className="orders__text orders__text--last">{order.email}</p>
                    <h3 className="orders__total">Total Order Price: {order.totalPrice}$</h3>
                </div>
            )
        })
    }

    return (
        <div className="orders">
            <h3 className="orders__title">Orders</h3>
            <div className="orders__orders-wrap">
                {renderedOrders()}
            </div>
        </div>
    )
}
export default MyOrders
