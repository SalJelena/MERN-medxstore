import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: {},
        randomProducts: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setSingleProduct: (state, action) => {
            state.product = action.payload
        },
        setRandomProducts: (state, action) => {
            state.randomProducts = action.payload
        }
    }
})

export const {setProducts, setSingleProduct, setRandomProducts} = productsSlice.actions
export default productsSlice.reducer