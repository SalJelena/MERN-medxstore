import React from 'react'
import CategoriesList from "./CategoriesList";
import BrandsList from "./BrandsList";
import SortProducts from "./SortProducts";
import ResetFilters from "./ResetFilters";

const Sidebar = () => {


    return (
        <div className="sidebar">
            <SortProducts/>
            <CategoriesList/>
            <BrandsList/>
            <ResetFilters/>
        </div>
    )
}
export default Sidebar
