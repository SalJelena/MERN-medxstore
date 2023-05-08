import React from 'react'
import {Autoplay, Navigation, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {HERO_SLIDER} from "../../config/heroSliderData";


const Hero = () => {

    const renderedSlides = () => {
        return HERO_SLIDER.map((el, index) => {
            return <SwiperSlide key={index}>
                <div className="hero__slide">
                    <div className="hero__img-wrap">
                        <img className="hero__img" src={el.imgSrc} alt="hero banner"/>
                    </div>
                    <h1 className="hero__title">{el.title}</h1>
                    <div className="hero__content">
                        <div className="hero__left">
                            <h3 className="hero__subtitle">{el.subtitle}</h3>
                            <p className="hero__subtitle-text">{el.desc}</p>
                            <button className="button button--secondary button--rounded">
                                {el.btnText}
                            </button>
                        </div>
                        <div className="hero__right">
                            <div className="hero__stack">
                                {el.info?.map((el, index) => {
                                    return (
                                        <div className="hero__item">
                                            <span className="hero__icon">{el.icon}</span>
                                            <span className="hero__text">{el.description}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        })
    }

    return (
        <div className='hero'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                //autoplay={{delay: 6000}}
                navigation={{clickable: true}}
                onSwiper={(swiper) => console.log()}
                onSlideChange={() => console.log()}
                className="hero__slider"
            >
                {renderedSlides()}
            </Swiper>
        </div>
    )
}

export default Hero