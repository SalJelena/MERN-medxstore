import React from "react"
import {Link, useNavigate} from "react-router-dom";
import logoImg from "../../assets/images/logo-no-bg.png";
import {MdSearch, MdShoppingCart} from "react-icons/md";
import {BsFillPersonFill, BsList} from "react-icons/bs";
import NavItems from "./NavItems";
import {useState} from "react";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import SearchForm from "../SearchForm/SearchForm";
import {routes} from "../../router/routes";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../store/usersSlice";
import {LS_TOKEN} from "../../config/configVars";
import {removeFromCart} from "../../store/cartSlice";
import Cart from "../Cart/Cart";

const NavBar = () => {
    const [cartModalOpened, setCartModalOpened] = useState(false)
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    const [searchOpened, setSearchOpened] = useState(false)

    const {user} = useSelector(state => state.usersStore)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleMobileMenu = () => {
        !mobileMenuVisible ? setMobileMenuVisible(true) : setMobileMenuVisible(false)
        !mobileMenuVisible ? disableBodyScroll(document) : enableBodyScroll(document)
    }

    const handleSearchOpen = () => {
        !searchOpened ? setSearchOpened(true) : setSearchOpened(false)
        !searchOpened ? disableBodyScroll(document) : enableBodyScroll(document)
    }

    const handleLogout = () => {
        dispatch(logoutUser())
        localStorage.removeItem(LS_TOKEN)
        navigate(routes.HOME.path)
    }

    const handleCartOpen = () => {
        !cartModalOpened ? setCartModalOpened(true) : setCartModalOpened(false)
        !cartModalOpened ? disableBodyScroll(document) : enableBodyScroll(document)
    }

    return (
        <>
            <nav className="nav">
                <div className="wrap nav__holder">

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
                                <button type="button" className="nav__search nav__btn-control"
                                        onClick={handleSearchOpen}>
                                    <MdSearch/>
                                </button>
                            </div>
                            <div className="nav__control">
                                <Link to={routes.AUTH.path} className="nav__user">
                                    {user.hasOwnProperty("email") ?
                                        <span className="nav__user-name">{user.firstName}</span>
                                        :
                                        null
                                    }
                                    <BsFillPersonFill/>
                                </Link>
                                <div className="nav__user-dropdown">
                                    {user.hasOwnProperty("email") ?
                                        <>
                                            <Link to={routes.DASHBOARD.path} className="nav__user-item">My
                                                Account</Link>
                                            <button className="nav__user-item" onClick={handleLogout}>Logout</button>
                                        </>
                                        :
                                        <>
                                            <Link to={routes.AUTH.path} className="nav__user-item">Login</Link>
                                            <Link to={routes.AUTH.path} className="nav__user-item">Register</Link>
                                        </>
                                    }
                                </div>
                            </div>

                            <div className="nav__control nav__cart">
                                <button className="nav__btn-control" onClick={handleCartOpen}>
                                    <MdShoppingCart/>
                                </button>
                            </div>


                            <div className="nav__control">
                                <button className="nav__menu-mobile nav__btn-control" onClick={handleMobileMenu}>
                                    <BsList/>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            <SearchForm searchOpened={searchOpened} onOpen={handleSearchOpen}/>
            <Cart cartModalOpened={cartModalOpened} onOpen={handleCartOpen}/>
        </>
    );
};

export default NavBar;
