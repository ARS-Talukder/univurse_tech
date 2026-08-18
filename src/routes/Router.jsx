import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import RootLayout from "../layouts/RootLayout";

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
        ],
    },
]);

export default router;
