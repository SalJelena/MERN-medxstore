import MyAccount from "../components/Dashboard/MyAccount";
import {routes} from "./routes";
import MyOrders from "../components/Dashboard/MyOrders";
import MyFavorites from "../components/Dashboard/MyFavorites";

export const dashboardChildren = [
    {
        path: routes.DASHBOARD.path,
        element: <MyAccount/>
    },
    {
        path: routes.MY_ORDERS.path,
        element: <MyOrders/>
    },
    {
        path: routes.MY_FAVORITES.path,
        element: <MyFavorites/>
    }
]