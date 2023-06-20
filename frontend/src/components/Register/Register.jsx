import React, {useState} from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";
import UserService from "../../services/userService";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const Register = ({setSelectedTab}) => {
    const [passwordType, setPasswordType] = useState("password")

    const notifyError = () => {
        toast.error('User with this email address already exists.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const notifyConfirm = () => {
        toast.success('You have successfully registered. Please check your email for activation link.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            password: "",
            email: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required."),
            lastName: Yup.string().required("Last name is required."),
            password: Yup.string().required("Password is required."),
            email: Yup.string()
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format")
                .required("Email is required.")
        }),
        onSubmit: (values, {resetForm}) => {
            UserService.registerUser(values)
                .then(res => {
                    if (res.status === 201) {
                        notifyError()
                    } else {
                        notifyConfirm()
                        resetForm()
                        setTimeout(() => {
                            setSelectedTab("login")
                        }, 3000)
                    }
                })
                .catch(err => console.log(err))
        }
    })

    const showError = (name) => {
        return formik.errors[name] && formik.touched[name] && (
            <span className="auth__error">{formik.errors[name]}</span>
        )
    }

    const togglePassword = () => {
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password")
    }

    return (
        <div className="auth__inner-wrap register__wrap">
            <form onSubmit={formik.handleSubmit} className="auth__form">

                <div className="auth__field-group">
                    <label htmlFor="firstName" className="auth__label">
                        First name {showError("firstName")}
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="auth__input"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </div>

                <div className="auth__field-group">
                    <label htmlFor="lastName" className="auth__label">
                        Last name{showError("lastName")}
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="auth__input"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                </div>

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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}
export default Register
