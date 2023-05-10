import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../store/productsSlice";
import {MdKeyboardArrowDown} from "react-icons/md"
import {useSearchParams} from "react-router-dom";

const SortProducts = () => {
    const [sortOrder, setSortOrder] = useState("lowPrice")
    const {products} = useSelector(state => state.productsStore)
    const dispatch = useDispatch()

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if (sortOrder === "lowPrice") {
            setSearchParams({sort: "ascending"})
            dispatch(setProducts(products))
        } else if (sortOrder === "highPrice") {
            setSearchParams({sort: "descending"})
            dispatch(setProducts(products))
        }
    }, [sortOrder])

    return (
        <div className="sidebar__item">
            <h3 className="sidebar__title">Sort</h3>
            <form className="sidebar__form">
                <div className="sidebar__form-group">
                    <select
                        className="sidebar__form-select"
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                    >
                        <option value="" disabled={true} className="sidebar__form-option">Choose option</option>
                        <option value="lowPrice" className="sidebar__form-option">By lowest price</option>
                        <option value="highPrice" className="sidebar__form-option">By highest price</option>
                    </select>
                    <span className="sidebar__form-icon">
                        <MdKeyboardArrowDown/>
                    </span>
                </div>
            </form>
        </div>
    )
}
export default SortProducts
