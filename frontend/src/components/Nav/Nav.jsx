import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import logoImg from "../../assets/images/logo-no-bg.png";
import NavItems from "../NavBar/NavItems";
import {MdSearch, MdShoppingCart} from "react-icons/md";
import {routes} from "../../router/routes";
import {BsFillPersonFill, BsList} from "react-icons/bs";
import {AiFillCheckCircle} from "react-icons/ai";
import {logoutUser} from "../../store/usersSlice";
import {clearCart} from "../../store/cartSlice";
import {LS_TOKEN} from "../../config/configVars";
import {useDispatch} from "react-redux";

const Nav = ({handleMobileMenu, mobileMenuVisible, handleSearchOpen, handleCartOpen, user, cart}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser())
        dispatch(clearCart())
        localStorage.removeItem(LS_TOKEN)
        navigate(routes.AUTH.path)
    }

    return (
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

                        <div className="nav__control nav__control-btn">
                            <button className="nav__menu-mobile" onClick={handleMobileMenu}>
                                <BsList/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}
export default Nav
