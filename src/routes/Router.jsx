import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Loading from "../components/Shared/Loading";
import {
    HomePage,
    NotFoundPage,
    PrivacyPolicyPage,
    ProductCategoryPage,
    ProductDetailsPage,
    ServiceDetailsPage,
    TermsPage,
} from "./LazyPages";

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
                element: <ProductCategoryPage />,
            },
            {
                path: "/services/:slug",
                element: <ServiceDetailsPage />,
            },
            {
                path: "/loading",
                element: <Loading />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            }
        ],
    },
]);

export default router;
