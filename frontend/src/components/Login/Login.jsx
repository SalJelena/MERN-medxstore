import React from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";

const Login = () => {

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
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const showError = (name) => {
        return formik.errors[name] && formik.touched[name] && (
            <div className="form__error">{formik.errors[name]}</div>
        )
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
export default Login
