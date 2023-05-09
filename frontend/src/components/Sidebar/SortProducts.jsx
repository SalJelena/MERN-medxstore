import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../store/productsSlice";

const SortProducts = () => {
    const [sort, setSort] = useState("")
    const {products} = useSelector(state => state.productsStore)
    const dispatch = useDispatch()

    useEffect(() => {
        let sortedProducts = []

        if (sort === "lowPrice") {
            sortedProducts = [...products]
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price)
            dispatch(setProducts(sortedProducts))

        } else if (sort === "highPrice") {
            sortedProducts = [...products]
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price)
            dispatch(setProducts(sortedProducts))
        }


    }, [sort])

    return (
        <div className="sidebar__item">
            <h3 className="sidebar__title">Sort</h3>
            <form className="sidebar__form form">
                <div className="sidebar__form-group">
                    <select
                        className="sidebar__form-select"
                        value={sort}
                        onChange={(event) => setSort(event.target.value)}
                    >
                        <option value="" disabled={true}>Choose option</option>
                        <option value="lowPrice">By lowest price</option>
                        <option value="highPrice">By highest price</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
export default SortProducts
