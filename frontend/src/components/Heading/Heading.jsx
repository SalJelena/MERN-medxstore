import React from 'react'

const Heading = ({title, bgImage, reversed}) => {
    return (
        <div className="heading__container">
            <div className={`heading__image ${reversed ? "heading__image--reversed" : ""}`}
                 style={{backgroundImage: "url(" + bgImage + ")"}}></div>
            {title && <div className="wrap">
                <div className="heading__inner">
                    <h1 className="heading__title">{title}</h1>
                </div>
            </div>}

        </div>
    )
}
export default Heading
