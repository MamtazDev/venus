import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Layout from "../Layout/Layout";
import DashBoard from "../pages/DashBoard/DashBoard";
import EmailVerification from "../Authentication/EmailVerification/EmailVerification";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <DashBoard />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/emailVerification",
        element: <EmailVerification />,
    },
]);
