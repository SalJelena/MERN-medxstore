import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: {}
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setSingleProduct: (state, action) => {
            state.product = action.payload
        }
    }
})

export const {setProducts, setSingleProduct} = productsSlice.actions
export default productsSlice.reducer