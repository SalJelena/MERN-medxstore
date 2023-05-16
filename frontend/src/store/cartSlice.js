import {createSlice} from "@reduxjs/toolkit";
import {LS_CART} from "../config/configVars";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        totalPrice: 0
    },
    reducers: {
        changeQuantityCart: (state, action) => {
            let {id, count} = action.payload
            let copyCart = [...state.cart]
            let totalPrice = 0

            state.cart = copyCart.map(item => {
                if (item._id === id) {
                    item.quantity += count
                    item.total = item.quantity * item.price
                }
                totalPrice += item.total
                return item
            })

            state.totalPrice = totalPrice
            cartSlice.caseReducers.updateLocalStorage(state)
        },
        addToCart: (state, action) => {
            let product = {...action.payload.product}
            let quantity = action.payload.quantity
            let copyCart = [...state.cart]
            let totalPrice = 0
            let foundIndex = null

            product.quantity = quantity

            state.cart.find((cartProduct, index) => {
                if (cartProduct._id === product._id) {
                    foundIndex = index
                }
                return cartProduct._id === product._id
            })

            if (foundIndex !== null) {
                copyCart[foundIndex].quantity += quantity
                copyCart[foundIndex].total += product.price * quantity
            } else {
                product.total = product.price * quantity
                copyCart.push(product)
            }

            copyCart.forEach(el => {
                totalPrice += el.total
            })

            state.totalPrice = totalPrice

            state.cart = copyCart
            cartSlice.caseReducers.updateLocalStorage(state)
        },
        removeFromCart: (state, action) => {

            state.cart = state.cart.filter(el => {
                if (el._id === action.payload) {
                    state.totalPrice -= el.price * el.quantity
                }
                return el._id !== action.payload
            })

            cartSlice.caseReducers.updateLocalStorage(state)

        },
        updateLocalStorage: (state, action) => {
            localStorage.setItem(LS_CART, JSON.stringify(state.cart))
        },
        restoreCart: (state, action) => {
            state.cart = action.payload
            state.totalPrice = action.payload.reduce((previous, current) => {
                return previous + current.total
            }, 0)
        }
    }
})

export const {addToCart, removeFromCart, restoreCart, changeQuantityCart} = cartSlice.actions
export default cartSlice.reducer