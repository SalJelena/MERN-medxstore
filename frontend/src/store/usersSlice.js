import {createSlice} from "@reduxjs/toolkit";
import {LS_USER} from "../config/configVars";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem(LS_USER, JSON.stringify(action.payload))
        },
        restoreUser: (state, action) => {
            state.user = action.payload
        },
        logoutUser: (state, action) => {
            state.user = {}
            localStorage.removeItem(LS_USER)
        }
    }
})

export const {setUser, restoreUser, logoutUser} = usersSlice.actions
export default usersSlice.reducer