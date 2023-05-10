import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import ProductService from "../../services/productsService";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {setRandomProducts} from "../../store/productsSlice";
import ProductCard from "../ProductCard/ProductCard";

const ProductsSlider = () => {
    const dispatch = useDispatch()
    const {randomProducts} = useSelector(state => state.productsStore)

    useEffect(() => {
        ProductService.getRandomProducts(8)
            .then(res => dispatch(setRandomProducts(res.data)))
    }, []);


    const renderedSlides = () => {
        return randomProducts.map(product => {
            return (<SwiperSlide key={product._id}>
                <ProductCard product={product}/>
            </SwiperSlide>)
        })
    };

    return (
        <div>
            <Swiper
                breakpoints={{
                    120: {
                        width: 120,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    992: {
                        width: 992,
                        slidesPerView: 3,
                    },
                    1100: {
                        width: 1100,
                        slidesPerView: 4
                    }
                }}
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                //slidesPerView={4}
                loop={false}
                autoplay={{delay: 5000}}
                navigation={true}
                onSwiper={(swiper) => console.log()}
                onSlideChange={() => console.log()}
                className="products-slider"
            >
                {renderedSlides()}
            </Swiper>
        </div>
    )
}
export default ProductsSlider
