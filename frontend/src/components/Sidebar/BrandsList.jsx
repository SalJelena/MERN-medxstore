import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import BrandsService from "../../services/brandsService";
import {setBrands} from "../../store/brandsSlice";
import {Link, useSearchParams} from "react-router-dom";

const BrandsList = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    let brandNameSelected = searchParams.get("brand")

    const {brands} = useSelector(state => state.brandsStore)
    const dispatch = useDispatch()

    useEffect(() => {
        BrandsService.getAllBrands()
            .then(res => dispatch(setBrands(res.data)))
            .catch(err => console.log(err))
    }, [])

    const renderedBrands = () => {
        return brands.map((el, index) => {
            return (
                <li key={el._id} className="sidebar__list-item brands__list-item">
                    <Link to={`/products/filterbrand?brand=${el.name}`}
                          className={
                              brandNameSelected === el.name
                                  ? `sidebar__list-link--active brands__list-link--active`
                                  : `sidebar__list-link brands__list-link`
                          }>
                        {el.name}
                    </Link>
                </li>
            )
        })
    }

    return (
        <div className="sidebar__item">
            <h3 className="sidebar__title">Brands</h3>
            <ul className="sidebar__list brands">
                {renderedBrands()}
            </ul>
        </div>
    )
}
export default BrandsList
