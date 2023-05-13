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
        }
    }
})

export const {setUser, restoreUser} = usersSlice.actions
export default usersSlice.reducer