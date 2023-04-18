import { createBrowserRouter, Link } from "react-router-dom";
import { appChildren } from "./appChildren";
import RootLayout from "./RootLayout";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <>
        <h1>404</h1>
        <Link to={"/"}>Home</Link>
      </>
    ),
    children: [
      {
        path: "/",
        element: <App />,
        children: appChildren,
      },
    ],
  },
]);
