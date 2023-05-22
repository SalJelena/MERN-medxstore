import React, {useState} from "react";
import {mainNavbarItem} from "../../router/routes";
import {NavLink} from "react-router-dom";
import NavDropdown from "./NavDropdown";
import {BsChevronDown} from "react-icons/bs";
import {MdOutlineClose} from "react-icons/md";
import {enableBodyScroll} from "body-scroll-lock";

const NavItems = ({onMobileMenu, handleMobileMenu, setMobileMenuVisible}) => {
    const [dropdownMobile, setDropdownMobile] = useState(false)

    const handleDropdownMobile = () => {
        !dropdownMobile ? setDropdownMobile(true) : setDropdownMobile(false)
    }

    const renderedListItem = () => {
        return mainNavbarItem.map((item, index) => {
            return (
                <li key={index} className="nav__item">

                    {item.hasOwnProperty("subitem") ?
                        (
                            <>
                                <button type="button" className="nav__link" onClick={handleDropdownMobile}>{item.name}
                                    <span><BsChevronDown/></span>
                                </button>
                                <NavDropdown items={item.subitem} dropdownMobile={dropdownMobile}/>
                            </>
                        )
                        :
                        (
                            <NavLink to={item.path} className="nav__link"
                                     onClick={() => {
                                         setMobileMenuVisible(false)
                                         enableBodyScroll(document)
                                     }}>{item.name}</NavLink>
                        )
                    }
                </li>
            );
        });
    };

    return (
        <ul className={`nav__list ${onMobileMenu ? `nav__list--active` : ""}`}>
            <li className="nav__mobile-close">
                {onMobileMenu ? <button type="button" onClick={handleMobileMenu}><MdOutlineClose/></button> : null}
            </li>
            {renderedListItem()}
        </ul>
    );
};

export default NavItems;
