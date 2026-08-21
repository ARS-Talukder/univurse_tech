import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import RootLayout from "../layouts/RootLayout";
import Loading from "../components/Shared/Loading";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "/terms-and-conditions",
                element: <Terms />,
            },
            {
                path: "/loading",
                element: <Loading />,
            }
        ],
    },
]);

export default router;
