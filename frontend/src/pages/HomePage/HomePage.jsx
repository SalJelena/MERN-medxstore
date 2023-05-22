import React from 'react'
import Hero from '../../components/Hero/Hero'
import TextPanel from "../../components/TextPanel/TextPanel";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import AccordionPanel from "../../components/Accordion/AccordionPanel";
import {ToastContainer} from "react-toastify";

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <TextPanel/>
            <LatestProducts/>
            <AccordionPanel/>
            <ToastContainer/>
        </div>
    )
}

export default HomePage
