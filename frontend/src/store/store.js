import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import categoriesSlice from "./categoriesSlice";
import brandsSlice from "./brandsSlice";
import usersSlice from "./usersSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        productsStore: productsSlice,
        categoriesStore: categoriesSlice,
        brandsStore: brandsSlice,
        usersStore: usersSlice,
        cartStore: cartSlice
    }
})