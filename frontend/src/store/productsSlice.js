import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: {}
    },
    reducers: {
        setProducts: (state, action) => {

            if (action.payload.sort === "low") {
                let sorted = [...action.payload.products]
                state.products = sorted.sort((a, b) => a.price - b.price)
            } else if (action.payload.sort === "high") {
                let sorted = [...action.payload.products]
                state.products = sorted.sort((a, b) => b.price - a.price)
            } else {
                state.products = action.payload
            }

        },
        setSingleProduct: (state, action) => {
            state.product = action.payload
        }
    }
})

export const {setProducts, setSingleProduct} = productsSlice.actions
export default productsSlice.reducer