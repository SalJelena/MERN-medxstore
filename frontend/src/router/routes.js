export const routes = {
  HOME: { path: "/", name: "Home" },
  SHOP: { 
    path: "/shop", 
    name: "Shop",
    subitem: [
        {
            path: "/shop",
            name: "Dolor sit amet"
        },
        {
            path: "/shop",
            name: "Lorem ipsum amet"
        },
        {
            path: "/shop",
            name: "Aliquam commodo"
        },
        {
            path: "/shop",
            name: "Misc A Leanaus"
        }
    ]
 },
  CONTACT: { path: "/contact", name: "Contact" },
  COLLECTIONS: { 
    path: "/collections", 
    name: "Collections",
    subitem: [
        {
            img: "https://i.postimg.cc/GhkDqNtc/144546163189607-63e20d6e2d705.jpg",
            path: "/shop",
            name: "Dolor sit amet"
        },
        {
            img: "https://i.postimg.cc/pLfmJn0y/3eceb3168809349-644113124d033.jpg",
            path: "/shop",
            name: "Lorem ipsum"
        },
        {
            img: "https://i.postimg.cc/cJT6VGGS/6d1d7a168809349-644113124b199.jpg",
            path: "/shop",
            name: "Aliquam commodo"
        },
        {
            img: "https://i.postimg.cc/HnMMGvt9/737b5a75605675-5c51621ecb77b.jpg",
            path: "/shop",
            name: "Nisi at turpis"
        }
    ]
 },
 ABOUT_US: {path: "/about", name: "About us"},
 FAQ: {path: "/faq", name: "FAQ"},
 POLICY: {path: "/policy", name: "Shipping & Return Policy"}
};

export const mainNavbarItem = [routes.HOME, routes.SHOP, routes.CONTACT, routes.COLLECTIONS, routes.ABOUT_US];
