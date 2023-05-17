import React, {useState} from 'react'
import {BsArrowRight} from "react-icons/bs";
import {Link} from "react-router-dom";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import ReviewsStars from "../ReviewsStars/ReviewsStars";
import {addToCart} from "../../store/cartSlice";
import {useDispatch} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({product}) => {
    const [user, setUser] = useState([])
    const dispatch = useDispatch()

    return (

        <div className="product__card-holder">
            <Link to={`/product/${product._id}`} className='product__card card'>
                <div className='card__img-holder'>
                    <div className='card__img' style={{backgroundImage: "url(" + product.thumbnail + ")"}}></div>
                </div>
                <div className="card__hover">
                    {
                        user?.favorites?.includes(product._id) ? (
                                <span>
                            <AiFillHeart/>
                        </span>
                            ) :
                            (
                                <span>
                            <AiOutlineHeart/>
                        </span>
                            )
                    }
                </div>
                <div className='card__reviews'>
                    <ReviewsStars rating={product.rating}/>
                </div>
                <h4 className='card__title'>{product.title}</h4>
            </Link>
            <div className='card__control'>
                <button className='button--round card__cart-btn'
                        onClick={() => {
                            dispatch(addToCart({product, quantity: 1}))
                            toast.success("Product added to cart.");
                        }}>
                          <span className='card__icon'>
                            <BsArrowRight/>
                          </span>
                    <span>Add to cart</span>
                </button>
                <span className="card__price">${product.price}</span>
            </div>
        </div>
    )
}

export default ProductCard