import React from 'react'

const TitleHeading = ({title, subtitle}) => {
    return (
        <div className="title-heading">
            <h4 className="title-heading__subtitle">{subtitle}</h4>
            <h2 className="title-heading__title">{title}</h2>
        </div>
    )
}
export default TitleHeading
