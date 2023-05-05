import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo-no-bg.png";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { BsFillPersonFill, BsList } from "react-icons/bs";
import NavItems from "./NavItems";
import { useState } from "react";

const NavBar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  const handleMobileMenu = () => {
    !mobileMenuVisible ? setMobileMenuVisible(true) : setMobileMenuVisible(false)
  }

  return (
    <nav className="nav">
      <div className="wrap nav__holder ">
        <Link to="/" className="nav__logo">
          <img
            src={logoImg}
            alt="logo of the company"
            className="nav__logo-img"
          />
        </Link>
        <div className="nav__inner">
          <NavItems onMobileMenu={mobileMenuVisible} />
          <div className="nav__controls">
            <div className="nav__control">
              <button type="button" className="nav__search">
                <MdSearch />
              </button>
            </div>
            <div className="nav__control">
              <button type="button" className="nav__user">
                <BsFillPersonFill />
              </button>
            </div>
            <div className="nav__control">
              <button type="button" className="nav__cart">
                <MdShoppingCart />
              </button>
            </div>
            <div className="nav__control">
              <button className="nav__menu-mobile" onClick={handleMobileMenu}>
                  <BsList />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
