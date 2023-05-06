import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductsView = ({ products }) => {
    const renderedProducts = () => {
        return products?.map(product => {
          <ProductCard product={product} key={product._id} />
        })
      }

  return (
    <ul>{renderedProducts()}</ul>
  )
}

export default ProductsView