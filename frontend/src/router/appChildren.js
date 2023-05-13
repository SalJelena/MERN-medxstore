import {routes} from "./routes";

import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import ActivationAccountPage from "../pages/ActivationAccountPage/ActivationAccountPage";

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
    }

]