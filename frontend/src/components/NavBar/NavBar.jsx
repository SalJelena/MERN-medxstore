import React from "react"
import {useState} from "react";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import SearchForm from "../SearchForm/SearchForm";
import {useSelector} from "react-redux";
import Cart from "../Cart/Cart";
import Nav from "../Nav/Nav";

const NavBar = () => {
    const [cartModalOpened, setCartModalOpened] = useState(false)
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    const [searchOpened, setSearchOpened] = useState(false)

    const {user} = useSelector(state => state.usersStore)
    const {cart} = useSelector(store => store.cartStore)

    const handleMobileMenu = () => {
        !mobileMenuVisible ? setMobileMenuVisible(true) : setMobileMenuVisible(false)
        !mobileMenuVisible ? disableBodyScroll(document) : enableBodyScroll(document)
    }

    const handleSearchOpen = () => {
        !searchOpened ? setSearchOpened(true) : setSearchOpened(false)
        !searchOpened ? disableBodyScroll(document) : enableBodyScroll(document)
    }

    const handleCartOpen = () => {
        !cartModalOpened ? setCartModalOpened(true) : setCartModalOpened(false)
        !cartModalOpened ? disableBodyScroll(document) : enableBodyScroll(document)
    }

    return (
        <>
            <Nav handleMobileMenu={handleMobileMenu} mobileMenuVisible={mobileMenuVisible}
                 handleSearchOpen={handleSearchOpen} handleCartOpen={handleCartOpen} user={user} cart={cart}/>
            <SearchForm searchOpened={searchOpened} onOpen={handleSearchOpen}/>
            <Cart cartModalOpened={cartModalOpened} onOpen={handleCartOpen}/>
        </>
    );
};

export default NavBar;
