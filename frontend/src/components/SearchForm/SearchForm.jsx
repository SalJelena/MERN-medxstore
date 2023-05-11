import React from 'react'
import * as Yup from "yup";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {MdOutlineClose} from "react-icons/md";
import {BsSearch} from "react-icons/bs"

const SearchForm = ({searchOpened, onOpen}) => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            searchTerm: ""
        },
        validationSchema: Yup.object({
            searchTerm: Yup.string()
        }),
        onSubmit: (values, {resetForm}) => {
            navigate(`/results?term=${values.searchTerm}`)
            onOpen()
            resetForm()
        },
    })

    return (
        <>
            <div className={`search ${searchOpened ? `search--active` : ""} `}>
                <button className="search__close" onClick={() => onOpen()}>
                    <MdOutlineClose/>
                </button>
                <div className="search__container">
                    <h2 className="search__title">Search for any product</h2>
                    <form onSubmit={formik.handleSubmit} className="search__form">
                        <label htmlFor="searchTerm"></label>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search__input"
                            name="searchTerm"
                            id="searchTerm"
                            value={formik.values.searchTerm}
                            onInput={formik.handleChange}
                        />
                        <button type="submit" title="Search" className="search__btn">
                            <BsSearch/>
                        </button>
                    </form>
                </div>
            </div>
            <div className="search__overlay"/>
        </>
    )
}
export default SearchForm
