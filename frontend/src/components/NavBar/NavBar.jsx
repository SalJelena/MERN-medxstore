import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo-no-bg.png";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import NavItems from "./NavItems";

const NavBar = () => {
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
          <NavItems />
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
