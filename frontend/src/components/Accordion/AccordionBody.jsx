import React from 'react'
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ACCORDION_DATA} from "../../config/accordionData";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

const Accordion = () => {
    const [expanded, setExpanded] = useState(0);

    const renderedAccordion = () => {
        return ACCORDION_DATA.map((el, index) => {
            const isOpen = index === expanded

            return (
                <div key={index} className="accordion__item">
                    <motion.header
                        initial={false}
                        animate={{backgroundColor: isOpen ? "#fff" : "#fff"}}
                        onClick={() => setExpanded(isOpen ? false : index)}
                        className="accordion__header"
                    >
                        {el.title} <span><MdOutlineKeyboardArrowDown/></span>
                    </motion.header>
                    <AnimatePresence initial={false}>
                        {isOpen && (
                            <motion.section
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                className="accordion__section"
                                variants={{
                                    open: {opacity: 1, height: "auto"},
                                    collapsed: {opacity: 0, height: 0}
                                }}
                                transition={{duration: 0.3}}
                            >
                                <motion.div
                                    variants={{collapsed: {scale: 1}, open: {scale: 1}}}
                                    transition={{duration: 0.3}}
                                    className="accordion__content"
                                >
                                    {el.desc}
                                </motion.div>
                            </motion.section>
                        )}
                    </AnimatePresence>

                </div>
            )
        })
    };


    return (
        <div className="accordion">
            {renderedAccordion()}
        </div>
    )
};

export default Accordion

