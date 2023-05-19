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
import {LS_CART, LS_TOKEN} from "../../config/configVars";
import {clearCart, logoutCart, removeFromCart} from "../../store/cartSlice";
import Cart from "../Cart/Cart";
import {AiFillCheckCircle} from "react-icons/ai";

const NavBar = () => {
    const [cartModalOpened, setCartModalOpened] = useState(false)
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    const [searchOpened, setSearchOpened] = useState(false)
    const [dropVisible, setDropVisible] = useState(false)

    const {user} = useSelector(state => state.usersStore)
    const {cart} = useSelector(store => store.cartStore)

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
        dispatch(clearCart())
        localStorage.removeItem(LS_TOKEN)
        navigate(routes.AUTH.path)
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

                            <div className="nav__control nav__control-user">

                                {
                                    user.hasOwnProperty("email") ?
                                        <>
                                            <button className="nav__user" onClick={handleLogout}>
                                                <span className="nav__user-name">Logout</span>
                                            </button>
                                            <Link to={routes.DASHBOARD.path} className="nav__user">
                                                <span className="nav__user-name">My Account</span>
                                                <BsFillPersonFill/>
                                            </Link>
                                        </>
                                        :
                                        <Link to={routes.AUTH.path} className="nav__user">
                                            {user.hasOwnProperty("email") ?
                                                <span className="nav__user-name">{user.firstName}</span>
                                                :
                                                <span className="nav__user-name">Sign in</span>
                                            }
                                            <BsFillPersonFill/>
                                        </Link>

                                }

                            </div>

                            <div className="nav__control nav__cart">
                                <button className="nav__btn-control" onClick={handleCartOpen}>
                                    <MdShoppingCart/>
                                    {cart.length !== 0 ?
                                        <span className="nav__cart-checkmark">
                                            <AiFillCheckCircle/>
                                        </span>
                                        :
                                        null
                                    }
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
