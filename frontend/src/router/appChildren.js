import { routes } from "./routes";

import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import ContactPage from "../pages/ContactPage/ContactPage";

export const appChildren = [
    {
        path: routes.HOME.path,
        element: <HomePage />
    },
    {
        path: routes.SHOP.path,
        element: <ShopPage />
    },
    {
        path: routes.CONTACT.path,
        element: <ContactPage />
    }
]