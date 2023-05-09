import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductService from "../../services/productsService";
import {setProducts} from "../../store/productsSlice";
import ProductsView from "../../components/ProductsView/ProductsView";
import {useSearchParams} from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import Sidebar from "../../components/Sidebar/Sidebar";
import SortProducts from "../../components/Sidebar/SortProducts";

const ShopPage = () => {
    const [count, setCount] = useState();

    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.productsStore);

    const [searchParams, setSearchParams] = useSearchParams()

    let limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")) : 8
    let page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1
    let category = searchParams.get("category") ? searchParams.get("category") : ""
    let brand = searchParams.get("brand") ? searchParams.get("brand") : ""

    useEffect(() => {
        let req = null

        if (category) {
            setSearchParams({category, limit, page})
        } else if (brand) {
            setSearchParams({brand, limit, page})
        } else {
            setSearchParams({limit, page})
        }

        if (category) {
            req = ProductService.paginationByCategory(category, limit, page)
        } else if (brand) {
            req = ProductService.paginationByBrand(brand, limit, page)
        } else {
            req = ProductService.paginationProducts(limit, page)
        }

        req.then((res) => {
            dispatch(setProducts(res.data.products))
            setCount(res.data.count)
        })
            .catch((error) => console.log(error));
    }, [searchParams]);


    return (
        <div className="shop">
            <div className="wrap">
                <div className="shop__container">
                    <Sidebar/>
                    <div className="shop__inner">
                        <ProductsView products={products}/>
                        <Pagination setSearchParams={setSearchParams} limit={limit} page={page} count={count}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
