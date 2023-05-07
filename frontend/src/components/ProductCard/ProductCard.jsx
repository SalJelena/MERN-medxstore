import React from 'react'
import {BsArrowRight} from "react-icons/bs";
import {Link} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";

const ProductCard = ({ product }) => {
  return (
    <Link to={"/product/" + product._id} className='product__card card'>
      <div className='card__img-holder'>
        <div className='card__img' style={{ backgroundImage: "url(" + product.thumbnail + ")" }}></div>
      </div>
        <div className="card__hover">
            <span>
                <AiOutlineHeart />
            </span>
        </div>
      <div className='card__reviews'>
        <span>Reviews</span>
      </div>
      <h4 className='card__title'>{product.title}</h4>
      <div className='card__control'>
        <button className='button--round'>
          <span className='card__icon'>
            <BsArrowRight />
          </span>
          <span>Add to cart</span>
        </button>
        <span className="card__price">${product.price}</span>
      </div>
    </Link>
  )
}

export default ProductCard