import React from "react";
import { Link } from "react-router-dom";
import { QUICK_LINKS, MORE_INFO_LINKS, SOCIAL_LINKS } from "./footerData";

const Footer = () => {
  const renderedQuickLinks = () => {
    return QUICK_LINKS.map((el, index) => {
      return (
        <li className="footer__item" key={index}>
          <Link to={el.path} className="button button--link">{el.name}</Link>
        </li>
      );
    });
  };

  const renderedMoreInfoLinks = () => {
    return MORE_INFO_LINKS.map((el, index) => {
      return (
        <ul key={index} className="footer__list">
          {el.items.map((link, index) => {
            return (
              <li key={index} className="footer__list-item">
                <a href="/" className="footer__link">
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      );
    });
  };

  const renderedSocial = () => {
    return SOCIAL_LINKS.map((el, index) => {
      return (
        <a href={el.url} key={index} className="footer__social-icon">
          {el.icon}
        </a>
      );
    });
  };

  return (
    <div className="footer">
      <div className="wrap">
        <div className="footer__top">

          <div className="footer__info">
            <h4 className="footer__title">Welcome to MedXtore</h4>
            <p className="footer__text">
              Sign up to see our latest collections exclusive offers & get 10 % of everything.
            </p>
            <p className="footer__text">Estimated in the UK.</p>
            <Link to="/" className="button button--primary">Shop</Link>
          </div>

          <div className="footer__fast-links">
            <h3 className="footer__subtitle">Need help?</h3>
            <ul className="footer__fast-list">{renderedQuickLinks()}</ul>
          </div>

          <div className="footer__links">
            <h3 className="footer__subtitle">More info</h3>
            <div className="footer__list-wrapper">
                {renderedMoreInfoLinks()}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <a href="/" className="footer__copy">
            <span>600 N Washington Ave Suite C203, Minneapolis, MN 55401</span>
          </a>
          <div className="footer__copy">
            <span>Copyright 2023, Hook BZOTech</span>
          </div>
          <div className="footer__social">{renderedSocial()}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
