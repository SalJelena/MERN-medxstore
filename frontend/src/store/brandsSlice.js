import {createSlice} from "@reduxjs/toolkit";

const brandsSlice = createSlice({
    name: "categories",
    initialState: {
        brands: []
    },
    reducers: {
        setBrands: (state, action) => {
            state.brands = action.payload
        }
    }
})

export const {setBrands} = brandsSlice.actions
export default brandsSlice.reducer