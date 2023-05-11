import React, {useState} from "react";
import ContactService from "../../services/contactService";
import {motion} from "framer-motion";
import {BsCheckLg} from "react-icons/bs";

const validateEmail = (email) => {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const ContactForm = () => {
    const initialState = {
        name: "",
        email: "",
        message: "",
    }

    const [inputData, setInputData] = useState(initialState);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isMessageSent, setIsMessageSent] = useState(false);

    const inputHandler = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value});
    };

    const isFormValid = (data) => {
        !data.name ? setIsNameValid(false) : setIsNameValid(true);
        !validateEmail(data.email) ? setIsEmailValid(false) : setIsEmailValid(true);
        if (validateEmail(data.email) && data.name !== '') {
            return true;
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let validation = isFormValid(inputData);

        if (validation) {
            ContactService.sendContactMessage(inputData)
                .then((res) => {
                    setIsMessageSent(true);
                    setTimeout(() => {
                        setIsMessageSent(false);
                    }, 4000)

                    setInputData(initialState);
                })
                .catch((err) => {
                    setIsMessageSent(false)
                })
        }
    };

    return (
        <div className="form__container">
            <h3 className="form__title">Get in touch with us</h3>
            <form className="form__contact" onSubmit={submitHandler}>
                <div className="form__row">
                    <div className="form__input form__input--separated">
                        <label
                            className="form__label"
                            htmlFor="name"
                            style={isNameValid ? {color: ""} : {color: "#f95959"}}
                        >
                            {isNameValid ? "Your name *" : "Name is required."}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form__input-text"
                            value={inputData.name}
                            onInput={inputHandler}
                            style={isNameValid ? {borderColor: ""} : {borderColor: "#f95959"}}
                        />
                    </div>

                    <div className="form__input">
                        <label
                            className="form__label"
                            htmlFor="email"
                            style={isEmailValid ? {color: ""} : {color: "#f95959"}}
                        >
                            {isEmailValid ? "Your email *" : "Email is not valid."}
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="form__input-text"
                            value={inputData.email}
                            onInput={inputHandler}
                            style={isEmailValid ? {borderColor: ""} : {borderColor: "#f95959"}}
                        />
                    </div>
                </div>

                <div className="form__row">
                    <div className="form__input">
                        <label className="form__label" htmlFor="message">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="form__textarea"
                            value={inputData.message}
                            onInput={inputHandler}
                        />
                    </div>
                </div>

                <button type="submit" className="button button--rounded button--secondary form__btn">
                    Send a message
                </button>
            </form>

            {
                isMessageSent && (
                    <motion.div
                        className="form__msg"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}>
                        <span className="form__icon"><BsCheckLg/></span>
                        <span>Your message was sent.</span>
                    </motion.div>
                )
            }

        </div>
    );
};

export default ContactForm;


