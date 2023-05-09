import React from 'react'
import CategoriesList from "./CategoriesList";
import BrandsList from "./BrandsList";
import SortProducts from "./SortProducts";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <SortProducts/>
            <CategoriesList/>
            <BrandsList/>
        </div>
    )
}
export default Sidebar
