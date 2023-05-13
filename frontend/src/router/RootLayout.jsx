import {Outlet} from "react-router-dom"
import axios from "axios";
import {LS_TOKEN, LS_USER} from "../config/configVars";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {restoreUser} from "../store/usersSlice";

axios.interceptors.request.use((config) => {
    if (localStorage.hasOwnProperty(LS_TOKEN)) {
        config.headers.Authorization = localStorage.getItem(LS_TOKEN)
    }

    return config
})

function RootLayout() {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.hasOwnProperty(LS_USER)) {
            let user = JSON.parse(localStorage.getItem(LS_USER))
            dispatch(restoreUser(user))
        }

    }, []);


    return (
        <>
            <Outlet/>
        </>
    )
}

export default RootLayout;