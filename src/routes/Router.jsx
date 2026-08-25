import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import ProductDetails from "../pages/ProductDetails";
import ServiceDetails from "../pages/ServiceDetails";
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
                path: "/products/:slug",
                element: <ProductDetails />,
            },
            {
                path: "/services/:slug",
                element: <ServiceDetails />,
            },
            {
                path: "/loading",
                element: <Loading />,
            }
        ],
    },
]);

export default router;
