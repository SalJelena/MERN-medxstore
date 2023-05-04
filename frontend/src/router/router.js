import { createBrowserRouter } from "react-router-dom";
import { appChildren } from "./appChildren";
import RootLayout from "./RootLayout";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        children: appChildren,
      },
    ],
  },
]);
