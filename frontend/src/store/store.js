import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import categoriesSlice from "./categoriesSlice";
import brandsSlice from "./brandsSlice";

export const store = configureStore({
    reducer: {
        productsStore: productsSlice,
        categoriesStore: categoriesSlice,
        brandsStore: brandsSlice
    }
})