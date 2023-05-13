import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import categoriesSlice from "./categoriesSlice";
import brandsSlice from "./brandsSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
    reducer: {
        productsStore: productsSlice,
        categoriesStore: categoriesSlice,
        brandsStore: brandsSlice,
        usersStore: usersSlice
    }
})