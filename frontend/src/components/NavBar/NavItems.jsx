import React from "react";
import {mainNavbarItem} from "../../router/routes";
import {NavLink} from "react-router-dom";
import NavDropdown from "./NavDropdown";
import {BsChevronDown} from "react-icons/bs";
import {MdOutlineClose} from "react-icons/md";

const NavItems = ({onMobileMenu}) => {
    const renderedListItem = () => {
        return mainNavbarItem.map((item, index) => {
            return (
                <li key={index} className="nav__item">

                    {item.hasOwnProperty("subitem") ?
                        (
                            <button type="button" className="nav__link">{item.name}
                                <span><BsChevronDown/></span>
                            </button>
                        )
                        :
                        (
                            <NavLink to={item.path} className="nav__link">{item.name}</NavLink>
                        )
                    }
                    {item.hasOwnProperty("subitem") ? (
                        <NavDropdown items={item.subitem}/>
                    ) : null}
                </li>
            );
        });
    };

    return (
        <ul className={`nav__list ${onMobileMenu ? `nav__list--active` : ""} `}>
            {onMobileMenu ? <button type="button" className="nav__"><MdOutlineClose/></button> : null}
            {renderedListItem()}
        </ul>
    );
};

export default NavItems;
