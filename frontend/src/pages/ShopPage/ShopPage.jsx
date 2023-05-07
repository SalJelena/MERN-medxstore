import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../../services/productsService";
import { setProducts } from "../../store/productsSlice";
import ProductsView from "../../components/ProductsView/ProductsView";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsStore);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => dispatch(setProducts(res.data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="shop__container">
      <div className="wrap">
        <div className="shop__inner">
          <ProductsView products={products} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
