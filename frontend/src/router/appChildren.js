import {routes} from "./routes";

import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import ActivationAccountPage from "../pages/ActivationAccountPage/ActivationAccountPage";
import Cart from "../components/Cart/Cart";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import {AuthUtils} from "../utils/authUtils";
import {Navigate} from "react-router-dom";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ConfirmedOrderPage from "../pages/ConfirmedOrderPage/ConfirmedOrderPage";

export const appChildren = [
    {
        path: routes.HOME.path,
        element: <HomePage/>
    },
    {
        path: routes.SHOP.path,
        element: <ShopPage/>
    },
    {
        path: routes.PRODUCT_DETAIL.path,
        element: <SingleProductPage/>
    },
    {
        path: routes.CONTACT.path,
        element: <ContactPage/>
    },
    {
        path: routes.CATEGORY_PRODUCT.path,
        element: <ShopPage/>
    },
    {
        path: routes.BRAND_PRODUCT.path,
        element: <ShopPage/>
    },
    {
        path: routes.SEARCH_RESULTS.path,
        element: <SearchResultsPage/>
    },
    {
        path: routes.AUTH.path,
        element: <AuthPage/>
    },
    {
        path: routes.LOGIN.path,
        element: <AuthPage/>
    },
    {
        path: routes.REGISTER.path,
        element: <AuthPage/>
    },
    {
        path: routes.ACTIVATE_ACCOUNT.path,
        element: <ActivationAccountPage/>
    },
    {
        path: routes.CART.path,
        element: <CartPage/>
    },
    {
        path: routes.CHECKOUT.path,
        element: <PaymentProtect><CheckoutPage/></PaymentProtect>
    },
    {
        path: routes.PAYMENT_INIT.path,
        element: <PaymentProtect><PaymentPage/></PaymentProtect>
    },
    {
        path: routes.ORDER_INIT.path,
        element: <PaymentProtect><ConfirmedOrderPage/></PaymentProtect>
    },

]

function PaymentProtect({children}) {
    if (AuthUtils.isLogged()) {
        return children
    } else {
        return <Navigate to={routes.AUTH.path}/>
    }
}