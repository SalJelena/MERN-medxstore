import React, {useState} from 'react'
import {AiOutlineHeart} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import ReviewsStars from "../ReviewsStars/ReviewsStars";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cartSlice";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(0)
    const dispatch = useDispatch()


    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity !== 0 && quantity !== 1) {
            setQuantity(quantity - 1);
        }
    };

    const renderedBrand = () => {
        return product?.brandName?.map((el, index) => {
            return <Link to={`/products/filterbrand?brand=${el.name}`} className="product__brand"
                         key={index}>{el.name}</Link>
        })
    }

    const renderedCategories = () => {
        return product?.categoryName?.map((el, index) => {
            return <Link to={`/products/filtercategory?category=${el.name}`} className="product__category"
                         key={index}>{el.name}</Link>
        })
    }

    const renderMainImage = (index) => {
        setMainImage(index)
    }

    const renderedImages = () => {
        return product.images?.map((image, index) => {
            return (
                <button type="button" key={index} onClick={() => renderMainImage(index)}>
                    <img
                        src={image}
                        alt="Product various images"
                        className={`product__image ${mainImage === index ? 'product__image--active' : ""}`}
                    />
                </button>
            );
        });
    }

    const addToCartHandler = () => {
        dispatch(addToCart({product, quantity}))
        toast.success("Product added to cart.");

    }

    return (
        <>
            <div className="product__details">
                <div className="product__content-left">
                    {
                        product.images?.length !== 0 ?
                            <>
                                <div className="product__img-holder">
                                    {product?.images && <div
                                        style={{backgroundImage: "url(" + product?.images[mainImage] + ")"}}
                                        className="product__img"
                                    />}
                                </div>
                                <div className="product__images">
                                    {renderedImages()}
                                </div>
                            </>
                            :
                            <>
                                <img src={product?.thumbnail} alt={product?.title}/>
                            </>
                    }
                </div>

                <div className="product__content-right">
                    <h2 className="product__title">{product.title}</h2>
                    {renderedBrand()}
                    <div>
                        <ReviewsStars rating={product.rating}/>
                    </div>
                    <p className="product__description">{product.description}</p>
                    <div className="product__stock">
                        <span>Availability: </span>
                        {product?.stock > 1 ? (
                                <span className="product__stock-active">
                            On stock
                        </span>
                            )
                            :
                            (<span className="product__stock-notactive">
                            Not on stock
                        </span>
                            )
                        }
                    </div>
                    <h4 className="product__price">${product.price}</h4>

                    <div className="product__controls">
                        <div className="product__quantity-control">
                            <button
                                onClick={decreaseQuantity}
                                className="product__quantity-btn"
                            >
                                -
                            </button>
                            <span className="product__quantity">{quantity}</span>
                            <button
                                onClick={increaseQuantity}
                                className="product__quantity-btn"
                            >
                                +
                            </button>
                        </div>

                        <button type="button" className="button button--primary product__btn"
                                onClick={addToCartHandler}>
                            Add to cart
                        </button>

                        <button type="button" className="product__favorite">
                            <AiOutlineHeart/>
                        </button>
                    </div>

                    <div className="product__categories">
                        <span>Categories: </span>
                        {renderedCategories()}
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}
export default ProductDetails
