import React from 'react'
import TitleHeading from "../TitleHeading/TitleHeading";
import Accordion from "./AccordionBody";
import bgImage from "../../assets/images/06.jpg"

const AccordionPanel = () => {
    return (
        <div className="accordion-panel">
            <div className="wrap">
                <TitleHeading title="You've Got Any Questions?" subtitle="Recently asked questions"/>
                <div className="accordion-panel__holder">
                    <div className="accordion-panel__image">
                        <div className="accordion-panel__img" style={{backgroundImage: "url(" + bgImage + ")"}}/>
                    </div>
                    <Accordion/>
                </div>
            </div>
        </div>
    )
}
export default AccordionPanel
