import React, {useEffect} from 'react'
import ProductService from "../../services/productsService";
import {useParams} from "react-router-dom";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import bgImage from "../../assets/images/04.jpg"
import Heading from "../../components/Heading/Heading";
import {useDispatch, useSelector} from "react-redux";
import {setSingleProduct} from "../../store/productsSlice";

const SingleProductPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch();

    const {product} = useSelector(state => state.productsStore);

    useEffect(() => {
        ProductService.getSingleProductDetails(id)
            .then(res => dispatch(setSingleProduct(res.data)))
            .catch(err => console.log(err))
    }, [id])

    
    return (
        <div className="product-details__wrap">
            <Heading title={null} bgImage={bgImage}/>
            <div className="wrap">
                <ProductDetails/>
                <LatestProducts/>
            </div>
        </div>
    )
}
export default SingleProductPage
