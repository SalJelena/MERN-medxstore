import React from 'react'
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import UserService from "../../services/userService";
import {setUser} from "../../store/usersSlice";
import {toast} from "react-toastify";

const AccountDetailsEdit = ({user, onSave}) => {

    const dispatch = useDispatch()

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

            UserService.updateUserData({
                ...user,
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                city: values.city,
                postCode: values.postCode,
                phone: values.phone,
                email: values.email
            })
                .then(res => {
                    dispatch(setUser(res.data))
                    onSave()
                    toast.success("Changes were successfully changed.")
                })
                .catch(err => console.log(err))
        }
    })

    const showError = (name) => {
        return formik.errors[name] && formik.touched[name] && (
            <div className="form__error">{formik.errors[name]}</div>
        )
    }

    return (
        <form onSubmit={formik.handleSubmit} className="user__details-data">
            <div className="user__details-wrap">
                <label htmlFor="firstName" className="user__details-label">
                    First Name {showError("firstName")}
                </label>
                <input
                    type="text"
                    className="user__details-text"
                    name="firstName"
                    id="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
            </div>

            <div className="user__details-wrap">
                <label htmlFor="lastName" className="user__details-label">
                    Last Name {showError("lastName")}
                </label>
                <input
                    type="text"
                    className="user__details-text"
                    name="lastName"
                    id="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
            </div>

            <div className="user__details-wrap">
                <label htmlFor="email" className="user__details-label">
                    Email {showError("email")}
                </label>
                <input
                    type="text"
                    className="user__details-text"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>


            <div className="user__details-wrap">
                <label htmlFor="address" className="user__details-label">
                    Address {showError("address")}
                </label>
                <input
                    type="text"
                    className="user__details-text"
                    name="address"
                    id="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />
            </div>

            <div className="user__details-wrap">
                <label htmlFor="city" className="user__details-label">
                    City {showError("city")}
                </label>
                <input
                    type="text"
                    className="user__details-text"
                    name="city"
                    id="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                />
            </div>

            <div className="user__details-wrap">
                <label htmlFor="postCode" className="user__details-label">
                    Postcode {showError("postCode")}
                </label>
                <input
                    type="text"
                    className="user__details-text"
                    name="postCode"
                    id="postCode"
                    onChange={formik.handleChange}
                    value={formik.values.postCode}
                />
            </div>

            <div className="user__details-wrap">
                <label htmlFor="phone" className="user__details-label">
                    Phone {showError("phone")}
                </label>
                <input
                    type="text"
                    className="user__details-text"
                    name="phone"
                    id="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
            </div>
            <button type="submit" className="button button--secondary">Save</button>
        </form>
    )
}
export default AccountDetailsEdit

