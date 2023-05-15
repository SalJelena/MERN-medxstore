import {createBrowserRouter, Navigate} from "react-router-dom";
import {appChildren} from "./appChildren";
import RootLayout from "./RootLayout";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import {routes} from "./routes";
import DashboardPage from "../pages/DashboardPage/DasboardPage";
import {dashboardChildren} from "./dashboardChildren";
import {AuthUtils} from "../utils/authUtils";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <App/>,
                children: appChildren,
            },
            {
                path: routes.DASHBOARD.path,
                element: (
                    <DashboardProtect>
                        <DashboardPage/>
                    </DashboardProtect>
                ),
                children: dashboardChildren,
            }
        ],
    },
]);

function DashboardProtect({children}) {
    if (AuthUtils.isLogged()) {
        return children
    } else {
        return <Navigate to={routes.AUTH.path}/>
    }

}
