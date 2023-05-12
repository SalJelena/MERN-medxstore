import React from 'react'
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa"

const ReviewsStars = ({rating}) => {

    let array = []

    const renderStars = () => {

        for (let i = 0; i < 5; i++) {
            if (rating > i) {

                if (rating > i + 0.5) {
                    array.push(<span key={i} className="reviews__stars"><FaStar/></span>)
                } else {
                    array.push(<span key={i} className="reviews__stars"><FaStarHalfAlt/></span>)
                }

            } else {
                array.push(<span key={i} className="reviews__stars"><FaRegStar/></span>)
            }
        }

        return array
    }

    renderStars()

    return (
        <div className="reviews__holder">
            {array.map(el => el)}
            <span className="reviews__text">({rating})</span>
        </div>
    )
}
export default ReviewsStars
