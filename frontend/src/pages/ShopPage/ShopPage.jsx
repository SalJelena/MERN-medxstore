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

  return <ProductsView products={products} />;
};

export default ShopPage;
