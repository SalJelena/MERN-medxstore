import React from 'react'
import {TEXT_PANEL_DATA} from "../../config/textPanelData";
import {Link} from "react-router-dom";
import {routes} from "../../router/routes";

const TextPanel = () => {

    const renderedCards = () => {
        return TEXT_PANEL_DATA.map((el, index) => {
            return <Link to={routes.ABOUT_US.path} className="text-panel__card" key={index}>
                <span className="text-panel__icon">{el.icon}</span>
                <h3 className="text-panel__title">{el.title}</h3>
                <p className="text-panel__text">{el.desc}</p>
            </Link>
        })
    };

    return (
        <div className="text-panel">
            <div className="wrap">
                <div className="text-panel__content">
                    {renderedCards()}
                </div>
            </div>
        </div>
    )
}
export default TextPanel
