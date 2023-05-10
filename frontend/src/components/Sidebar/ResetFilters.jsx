import React from 'react'
import {useNavigate} from "react-router-dom";

const ResetFilters = () => {
    const navigate = useNavigate()

    const handleReset = () => {
        navigate("/products/all")
    }

    return (
        <div className="sidebar__btn">
            <button type="button" className="sidebar__reset" onClick={handleReset}>Reset Filters</button>
        </div>
    )
}
export default ResetFilters
