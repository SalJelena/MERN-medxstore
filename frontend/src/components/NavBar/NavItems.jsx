import React from "react";
import { mainNavbarItem } from "../../router/routes";
import { NavLink } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import { BsChevronDown } from "react-icons/bs";

const NavItems = ({ onMobileMenu }) => {
  const renderedListItem = () => {
    return mainNavbarItem.map((item, index) => {
      return (
        <li key={index} className="nav__item">
          <NavLink to={item.path} className="nav__link">
            {item.name}
            {item.hasOwnProperty("subitem") ? (
              <span>
                <BsChevronDown />
              </span>
            ) : null}
          </NavLink>
          {item.hasOwnProperty("subitem") ? (
            <NavDropdown items={item.subitem} />
          ) : null}
        </li>
      );
    });
  };

  return (
    <ul className={`nav__list ${onMobileMenu ? `nav__list--active` : ""} `}>
      {renderedListItem()}
    </ul>
  );
};

export default NavItems;
