import React from "react"
import {Link} from "react-router-dom";
import logoImg from "../../assets/images/logo-no-bg.png";
import {MdSearch, MdShoppingCart} from "react-icons/md";
import {BsFillPersonFill, BsList} from "react-icons/bs";
import NavItems from "./NavItems";
import {useState} from "react";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import SearchForm from "../SearchForm/SearchForm";
import {routes} from "../../router/routes";
import {useSelector} from "react-redux";

const NavBar = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    const [searchOpened, setSearchOpened] = useState(false)

    const {user} = useSelector(state => state.usersStore)

    const handleMobileMenu = () => {
        !mobileMenuVisible ? setMobileMenuVisible(true) : setMobileMenuVisible(false)
        !mobileMenuVisible ? disableBodyScroll(document) : enableBodyScroll(document)
    }

    const handleSearchOpen = () => {
        !searchOpened ? setSearchOpened(true) : setSearchOpened(false)
        !searchOpened ? disableBodyScroll(document) : enableBodyScroll(document)
    }

    return (
        <>
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
                        <NavItems onMobileMenu={mobileMenuVisible}/>
                        <div className="nav__controls">
                            <div className="nav__control">
                                <button type="button" className="nav__search" onClick={handleSearchOpen}>
                                    <MdSearch/>
                                </button>
                            </div>
                            <div className="nav__control">
                                <Link to={routes.AUTH.path} className="nav__user">
                                    {user.hasOwnProperty("email") ?
                                        <span>{user.firstName}</span>
                                        :
                                        null
                                    }
                                    <BsFillPersonFill/>
                                </Link>
                                <div className="nav__user-dropdown">
                                    {user.hasOwnProperty("email") ?
                                        <>
                                            <Link to={routes.AUTH.path} className="nav__user-item">Login</Link>
                                            <Link to={routes.AUTH.path} className="nav__user-item">Register</Link>
                                        </>
                                        :
                                        <>
                                            <Link to={routes.AUTH.path} className="nav__user-item">Login</Link>
                                            <Link to={routes.AUTH.path} className="nav__user-item">Register</Link>
                                        </>
                                    }

                                </div>
                            </div>
                            <div className="nav__control">
                                <button type="button" className="nav__cart">
                                    <MdShoppingCart/>
                                </button>
                            </div>
                            <div className="nav__control">
                                <button className="nav__menu-mobile" onClick={handleMobileMenu}>
                                    <BsList/>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            <SearchForm searchOpened={searchOpened} onOpen={handleSearchOpen}/>
        </>
    );
};

export default NavBar;
