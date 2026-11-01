import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Loading from "../components/Shared/Loading";
import {
    HomePage,
    PrivacyPolicyPage,
    ProductDetailsPage,
    ServiceDetailsPage,
    TermsPage,
} from "./LazyPages";
import ProductCategory from "../components/Products/ProductCategory";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicyPage />,
            },
            {
                path: "/terms-and-conditions",
                element: <TermsPage />,
            },
            {
                path: "/products/:slug",
                element: <ProductDetailsPage />,
            },
            {
                path: "/product-categories/:categorySlug",
                element: <ProductCategory />,
            },
            {
                path: "/services/:slug",
                element: <ServiceDetailsPage />,
            },
            {
                path: "/loading",
                element: <Loading />,
            }
        ],
    },
]);

export default router;
