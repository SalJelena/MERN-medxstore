import React, {useState} from 'react'
import {BsArrowRight} from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import ReviewsStars from "../ReviewsStars/ReviewsStars";
import {addToCart} from "../../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserService from "../../services/userService";
import {setUser} from "../../store/usersSlice";
import {AuthUtils} from "../../utils/authUtils";
import {routes} from "../../router/routes";

const ProductCard = ({product}) => {
    const {user} = useSelector(state => state.usersStore)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addFavoriteHandler = () => {
        AuthUtils.isLogged() ? (
                UserService.addToFavorite({productId: product._id, userId: user._id})
                    .then(res => dispatch(setUser(res.data)))
                    .catch(err => console.log(err))
            )
            :
            navigate(routes.AUTH.path)

    }

    const removeFavoriteHandler = () => {
        UserService.removeFromFavorite({productId: product._id, userId: user._id})
            .then(res => dispatch(setUser(res.data)))
            .catch(err => console.log(err))
    }

    return (
        <div className="product__card-holder">
            <Link to={`/product/${product?._id}`} className='product__card card'>
                <div className='card__img-holder'>
                    <div className='card__img' style={{backgroundImage: "url(" + product?.thumbnail + ")"}}></div>
                </div>

                <div className='card__reviews'>
                    <ReviewsStars rating={product?.rating}/>
                </div>
                <h4 className='card__title'>{product?.title}</h4>
            </Link>
            <div className="card__hover">

                {
                    user?.favorites?.includes(product?._id) ?
                        <button onClick={removeFavoriteHandler}>
                            <AiFillHeart/>
                        </button>
                        :
                        <button onClick={addFavoriteHandler}>
                            <AiOutlineHeart/>
                        </button>
                }

            </div>
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
                <span className="card__price">${product?.price}</span>
            </div>
        </div>
    )
}

export default ProductCard
