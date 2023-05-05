import React from "react";
import { NavLink } from "react-router-dom";

const NavDropdown = ({ items }) => {

  const renderedDropdown = () => {
    return items.map((item, index) => {
      return (
        <li key={index} className="nav__dropdown-item">
          <NavLink
            aria-current="page"
            to={item.path}
            className="nav__dropdown-link"
          >
            {item.img ? (
              <>
                <div className="nav__dropdown-img-holder">
                  <div className="nav__dropdown-img-layer" />
                  <div
                    style={{backgroundImage: "url(" + item.img + ")"}}
                    className="nav__dropdown-img"
                  />
                </div>
              </>
            ) : null}
            <span className="nav__dropdown-title">
              {item.name}
            </span>
          </NavLink>
        </li>
      );
    })
  }

  return (
    <ul className="nav__dropdown">
      {renderedDropdown()}
    </ul>
  );
};

export default NavDropdown;
