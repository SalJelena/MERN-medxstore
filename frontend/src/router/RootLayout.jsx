import {Outlet} from "react-router-dom"
import axios from "axios";
import {LS_CART, LS_TOKEN, LS_USER} from "../config/configVars";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {restoreUser} from "../store/usersSlice";
import {restoreCart} from "../store/cartSlice";

axios.interceptors.request.use((config) => {
    if (localStorage.hasOwnProperty(LS_TOKEN)) {
        config.headers.authorization = localStorage.getItem(LS_TOKEN)
    }

    return config
})

function RootLayout() {
    const dispatch = useDispatch()
    const [isFinish, setIsFinish] = useState(false);

    useEffect(() => {
        if (localStorage.hasOwnProperty(LS_USER)) {
            let user = JSON.parse(localStorage.getItem(LS_USER))
            dispatch(restoreUser(user))
        }
        if (localStorage.hasOwnProperty(LS_CART)) {
            let cart = JSON.parse(localStorage.getItem(LS_CART))
            dispatch(restoreCart(cart))
        }

        setIsFinish(true)

    }, []);


    return isFinish && (
        <>
            <Outlet/>
        </>
    )
}

export default RootLayout;