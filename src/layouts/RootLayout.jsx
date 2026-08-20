import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/Shared/ScrollToTop";
import BackToTop from "../components/Shared/BackToTop";

const RootLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Outlet />
            <BackToTop />
        </>
    );
};

export default RootLayout;