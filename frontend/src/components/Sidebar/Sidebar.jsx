import React, {useState} from 'react'
import CategoriesList from "./CategoriesList";
import BrandsList from "./BrandsList";
import SortProducts from "./SortProducts";
import ResetFilters from "./ResetFilters";

const Sidebar = () => {
    const [filtersOpened, setFiltersOpened] = useState(false)

    const handleMobileFilters = () => {
        !filtersOpened ? setFiltersOpened(true) : setFiltersOpened(false)
    }


    return (
        <div className="sidebar">
            <button type="button" className="button button--primary sidebar__btn-mobile" onClick={handleMobileFilters}>
                Select filters
            </button>
            <div className={`sidebar__filters ${filtersOpened ? "sidebar__filters--active" : ""}`}>
                <SortProducts/>
                <CategoriesList/>
                <BrandsList/>
                <ResetFilters/>
            </div>

        </div>
    )
}
export default Sidebar
