import React from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";

const Register = () => {

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
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const showError = (name) => {
        return formik.errors[name] && formik.touched[name] && (
            <span className="auth__error">{formik.errors[name]}</span>
        )
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

                <div className="auth__field-group">
                    <label htmlFor="password" className="auth__label">
                        Password {showError("password")}
                    </label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        className="auth__input"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>


                <button type="submit" className="auth__submit button button--rounded button--primary">Submit</button>
            </form>
        </div>
    )
}
export default Register
