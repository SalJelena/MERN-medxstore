import React from 'react'
import Heading from "../../components/Heading/Heading";
import bgImage from "../../assets/images/06.jpg"
import Map from "../../components/Map/Map";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

const ContactPage = () => {
    return (
        <>
            <Heading bgImage={bgImage}/>
            <div className="wrap">
                <ContactInfo/>
                <Map/>
                <ContactForm/>
            </div>
        </>
    )
}

export default ContactPage