import { lazy, Suspense } from "react";
import Loading from "../components/Shared/Loading";

const Home = lazy(() => import("../pages/Home"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const Terms = lazy(() => import("../pages/Terms"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const ServiceDetails = lazy(() => import("../pages/ServiceDetails"));

const PageLoader = ({ children }) => (
    <Suspense fallback={<Loading />}>
        {children}
    </Suspense>
);

export const HomePage = () => (
    <PageLoader>
        <Home />
    </PageLoader>
);

export const PrivacyPolicyPage = () => (
    <PageLoader>
        <PrivacyPolicy />
    </PageLoader>
);

export const TermsPage = () => (
    <PageLoader>
        <Terms />
    </PageLoader>
);

export const ProductDetailsPage = () => (
    <PageLoader>
        <ProductDetails />
    </PageLoader>
);

export const ServiceDetailsPage = () => (
    <PageLoader>
        <ServiceDetails />
    </PageLoader>
);
