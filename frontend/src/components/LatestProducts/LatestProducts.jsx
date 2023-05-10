import React from 'react'
import TitleHeading from "../TitleHeading/TitleHeading";
import ProductsSlider from "../ProductsSlider/ProductsSlider";

const LatestProducts = () => {
    return (
        <div className="products-list">
            <div className="wrap">
                <TitleHeading title="New Arrivals" subtitle="Our Products"/>
                <ProductsSlider/>
            </div>
        </div>
    )
}
export default LatestProducts
