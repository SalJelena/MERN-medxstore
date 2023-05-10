import React from 'react'
import Hero from '../../components/Hero/Hero'
import TextPanel from "../../components/TextPanel/TextPanel";
import LatestProducts from "../../components/LatestProducts/LatestProducts";

const HomePage = () => {
    return (
        <>
            <Hero/>
            <TextPanel/>
            <LatestProducts/>
        </>
    )
}

export default HomePage