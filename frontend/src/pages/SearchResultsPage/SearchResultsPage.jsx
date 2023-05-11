import React, {useEffect} from 'react'
import {useSearchParams} from "react-router-dom";
import SearchService from "../../services/searchService";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../store/productsSlice";
import Heading from "../../components/Heading/Heading";
import bgImage from "../../assets/images/06.jpg"
//import ProductCard from "../../components/ProductCard/ProductCard";
import noProductImg from "../../assets/images/no-product-found.png";
import ProductsView from "../../components/ProductsView/ProductsView";

const SearchResultsPage = () => {
    const {products} = useSelector(state => state.productsStore)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()

    const term = searchParams.get("term")

    useEffect(() => {
        SearchService.getSearchResults(term)
            .then(res => dispatch(setProducts(res.data)))
    }, [term]);


    return (
        <>
            <Heading bgImage={bgImage}/>
            <div className="wrap">
                <div className="search__wrap">
                    {products.length !== 0 ? <>
                        <h2 className="search__found-results">Search results for "<span>{term}</span>"</h2>
                    </> : null}
                    {
                        products.length !== 0 ?
                            <>
                                <ProductsView products={products}/>
                            </>
                            :
                            <>
                                <div className="shop__results-error">
                                    <h3 className="shop__results-error-title">Sorry!</h3>
                                    <h4 className="shop__results-error-subtitle">No products found.</h4>
                                    <img src={noProductImg} alt="No product found."
                                         className="shop__results-error-img"/>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}
export default SearchResultsPage
