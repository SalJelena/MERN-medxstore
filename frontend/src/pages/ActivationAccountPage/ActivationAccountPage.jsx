import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import UserService from "../../services/userService";
import {routes} from "../../router/routes";

const ActivationAccountPage = () => {
    const {id} = useParams()
    const [message, setMessage] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        UserService.activateAccount(id)
            .then(res => {
                setMessage("Your account is activated.")
                setTimeout(() => {
                    navigate(routes.AUTH.path)
                }, 3000)
            })
            .catch(err => {
                setMessage("Something went wrong with activation link.")
                // setTimeout(() => {
                //     navigate(routes.AUTH.path)
                // }, 3000)
            })
    }, []);


    return (
        <div className="activation">
            <div className="wrap">
                <h1 className="activation__title">Welcome to activation account</h1>
                <h4 className="activation__message">{message}</h4>
            </div>
        </div>
    )
}
export default ActivationAccountPage
