import { routes } from "../../router/routes";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram  } from "react-icons/bs";

export const QUICK_LINKS = [routes.ABOUT_US, routes.CONTACT, routes.FAQ, routes.POLICY]

export const MORE_INFO_LINKS = [
    {
        items: ["Our Blog", "Wishlist", "Products", "Brands"]
    },
    {
        items: ["About Us", "Contact", "Credits", "FAQs", "Vendors", "Lorem"]
    },
    {
        items: ["Publishers", "Vendors", "Affiliates", "Careers", "Misc", "Contact"]
    }
]

export const SOCIAL_LINKS = [
    {
        "link": "/",
        "icon": <BsFacebook />
    },
    {
        "link": "/",
        "icon": <BsTwitter />
    },
    {
        "link": "/",
        "icon": <BsYoutube />
    },
    {
        "link": "/",
        "icon": <BsInstagram />
    },
]