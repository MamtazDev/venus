import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Layout from "../Layout/Layout";
import DashBoard from "../pages/DashBoard/DashBoard";
import EmailVerification from "../Authentication/EmailVerification/EmailVerification";
import League from "../pages/League/League";
import TournamentTracking from "../pages/TournamentTracking/TournamentTracking";
import BiddingHistory from "../pages/BiddingHistory/BiddingHistory";
import Setting from "../pages/Setting/Setting";
import NotificationsSetting from "../components/SettingPagte/NotificationsSetting";
import EmailSetting from "../components/SettingPagte/EmailSetting";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <DashBoard />,
            },

            {
                path: "/league",
                element: <League />,
            },
            {
                path: "/tournamentTracking",
                element: <TournamentTracking />,
            },
            {
                path: "/biddingHistory",
                element: <BiddingHistory />,
            },
            {
                path: "/setting",
                element: <Setting />,

            },
            {
                path: "/preference/notification",
                element: <NotificationsSetting />,

            },
            {
                path: "/preference/emailSetting",
                element: <EmailSetting />,

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
