import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LegalPage from "../pages/LegalPage";

const router = createBrowserRouter([
    { path: "/", element: <Home />, },
    { path: "/home", element: <Home />, },
    { path: "/privacy-policy", element: <LegalPage type="privacy" />, },
    { path: "/terms-and-conditions", element: <LegalPage type="terms" />, },
]);

export default router;
