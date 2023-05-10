import React from 'react'
import Hero from '../../components/Hero/Hero'
import TextPanel from "../../components/TextPanel/TextPanel";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import AccordionPanel from "../../components/Accordion/AccordionPanel";

const HomePage = () => {
    return (
        <>
            <Hero/>
            <TextPanel/>
            <LatestProducts/>
            <AccordionPanel/>
        </>
    )
}

export default HomePage