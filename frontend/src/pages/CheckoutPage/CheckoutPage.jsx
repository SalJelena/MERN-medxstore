import React from 'react'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {routes} from "../../router/routes";
import {editAndUpdateUser, setUser} from "../../store/usersSlice";

const CheckoutPage = () => {

    const {user} = useSelector(state => state.usersStore)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let userId = user._id

    const formik = useFormik({
        initialValues: {
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            address: user.address || "",
            city: user.city || "",
            postCode: user.postCode || "",
            phone: user.phone || "",
            email: user.email || ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required."),
            lastName: Yup.string().required("Last Name is required."),
            address: Yup.string().required("Address is required."),
            city: Yup.string().required("City is required."),
            postCode: Yup.string().required("Postcode is required."),
            phone: Yup.string().required("Phone is required."),
            email: Yup.string()
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format")
                .required("Email is required.")
        }),
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log(userId)
            dispatch(setUser({
                userId: userId,
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                city: values.city,
                postCode: values.postCode,
                phone: values.phone,
                email: values.email
            }))
            navigate(routes.PAYMENT_INIT.path)
        }
    })

    const showError = (name) => {
        return formik.errors[name] && formik.touched[name] && (
            <div className="form__error">{formik.errors[name]}</div>
        )
    }

    return (

        <div className="checkout">
            <div className="wrap">
                <div className="checkout__inner">
                    <div>
                        Order Summary
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit}>

                            <div className="auth__field-group">
                                <label htmlFor="firstName" className="auth__label">
                                    First Name {showError("firstName")}
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
                                    Last Name {showError("lastName")}
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
                                <label htmlFor="address" className="auth__label">
                                    Address {showError("address")}
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    className="auth__input"
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                />
                            </div>
                            <div className="auth__field-group">
                                <label htmlFor="city" className="auth__label">
                                    City {showError("city")}
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    className="auth__input"
                                    onChange={formik.handleChange}
                                    value={formik.values.city}
                                />
                            </div>
                            <div className="auth__field-group">
                                <label htmlFor="postCode" className="auth__label">
                                    Postcode {showError("postCode")}
                                </label>
                                <input
                                    type="text"
                                    name="postCode"
                                    id="postCode"
                                    className="auth__input"
                                    onChange={formik.handleChange}
                                    value={formik.values.postCode}
                                />
                            </div>
                            <div className="auth__field-group">
                                <label htmlFor="phone" className="auth__label">
                                    Phone {showError("phone")}
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="auth__input"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
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

                            <button type="submit">Proceed to Payment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default CheckoutPage
