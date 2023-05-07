import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductsView = ({ products }) => {
  const renderedProducts = () => {
    return products.map((product) => {
      return <ProductCard product={product} key={product._id} />;
    });
  };

  return (
    <div className="shop__products">
      <ul className="products__list">{renderedProducts()}</ul>
    </div>
  );
};

export default ProductsView;
