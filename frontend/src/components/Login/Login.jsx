import React, {useState} from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";
import UserService from "../../services/userService";
import {LS_TOKEN} from "../../config/configVars";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/usersSlice";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {routes} from "../../router/routes";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const Login = () => {
    const [passwordType, setPasswordType] = useState("password")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            password: Yup.string().required("Password is required."),
            email: Yup.string()
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format")
                .required("Email is required.")
        }),
        onSubmit: (values, {resetForm}) => {
            UserService.loginUser(values)
                .then((res) => {
                    if (res.status === 201) {
                        toast.error(res.data.msg)
                    } else {
                        dispatch(setUser(res.data.user))
                        localStorage.setItem(LS_TOKEN, res.data.token);
                        toast.success("You are logged in");
                        resetForm()
                        setTimeout(() => {
                            navigate(routes.HOME.path);
                        }, 2000);
                    }
                })
                .catch(() => {

                })
        }
    })

    const showError = (name) => {
        return formik.errors[name] && formik.touched[name] && (
            <span className="form__error">{formik.errors[name]}</span>
        )
    }

    const togglePassword = () => {
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password")
    }

    return (
        <div className="auth__inner-wrap">
            <form onSubmit={formik.handleSubmit} className="auth__form">
                <div className="auth__field-group">
                    <label htmlFor="email" className="auth__label">
                        Email {showError("email")}
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="auth__input"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>

                <div className="auth__field-group auth__input-pass">
                    <label htmlFor="password" className="auth__label">
                        Password {showError("password")}
                    </label>
                    <input
                        type={passwordType}
                        name="password"
                        id="password"
                        className="auth__input"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />

                    <button type="button" className="auth__pass-icon" onClick={togglePassword}>
                        {passwordType === "password" ?
                            <span><AiOutlineEyeInvisible/></span>
                            :
                            <span><AiOutlineEye/></span>
                        }
                    </button>
                </div>
                <button type="submit" className="auth__submit button button--rounded button--primary">Submit</button>
            </form>
            <ToastContainer/>
        </div>
    )
}
export default Login
