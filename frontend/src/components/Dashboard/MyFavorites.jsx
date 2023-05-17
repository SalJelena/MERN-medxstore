import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import ProductDetailsCard from "./ProductDetailsCard";

const MyFavorites = () => {

    const {user} = useSelector(state => state.usersStore)

    const renderedFavoriteItems = () => {
        return user?.favorites?.map((productId, index) => {
            return <ProductDetailsCard productId={productId} key={productId}/>
        })
    }

    return (
        <div className="favorites">
            {renderedFavoriteItems()}
        </div>
    )
}
export default MyFavorites
