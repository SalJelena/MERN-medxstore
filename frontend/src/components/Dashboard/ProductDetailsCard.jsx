import React, {useEffect, useState} from 'react'
import ProductService from "../../services/productsService";
import {useDispatch} from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const ProductDetailsCard = ({productId, user}) => {
    const [product, setProduct] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        ProductService.getSingleProductDetails(productId)
            .then(res => {
                setProduct(res.data)
            })
    }, []);

    return (
        <ProductCard product={product} key={product?._id}/>
    )
}
export default ProductDetailsCard
