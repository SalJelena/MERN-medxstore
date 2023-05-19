import axios from "axios";

class CartService {
    static paymentInit = (body) => axios.post("/cart/paymentInit", body)
    static addNewOrder = (body) => axios.post("/cart/orders/add", body)
}

export default CartService