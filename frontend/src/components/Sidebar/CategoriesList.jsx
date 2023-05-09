import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import CategoriesService from "../../services/categoriesService";
import {setCategories} from "../../store/categoriesSlice";
import {Link, useSearchParams} from "react-router-dom";

const CategoriesList = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    let categoryNameSelected = searchParams.get("category")

    const {categories} = useSelector(state => state.categoriesStore)
    const dispatch = useDispatch()

    useEffect(() => {
        CategoriesService.getAllCategories()
            .then(res => dispatch(setCategories(res.data)))
            .catch(err => console.log(err))
    }, [])

    const renderedCategories = () => {
        return categories.map((el, index) => {
            return (
                <li key={el._id} className="sidebar__list-item">
                    <Link to={`/products/filtercategory?category=${el.name}`}
                          className={
                              categoryNameSelected === el.name
                                  ? `sidebar__list-link--active`
                                  : `sidebar__list-link`
                          }>
                        {el.name}
                        <span className="sidebar__list-count">{el.count}</span>
                    </Link>
                </li>
            )
        })
    }

    return (
        <div className="sidebar__item">
            <h3 className="sidebar__title">Categories</h3>
            <ul className="sidebar__list">
                {renderedCategories()}
            </ul>
        </div>
    )
}
export default CategoriesList
