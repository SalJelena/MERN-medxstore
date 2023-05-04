import React from "react";
import { mainNavbarItem } from "../../router/routes";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  const renderedListItem = () => {
    return mainNavbarItem.map((item, index) => {
      return (
        <li key={index} className="nav__item">
          <NavLink to={item.path} className="nav__link">
            {item.name}
          </NavLink>
        </li>
      );
    });
  };

  return <ul className="nav__list">{renderedListItem()}</ul>;
};

export default NavItems;
