import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/Shared/ScrollToTop";

const RootLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    );
};

export default RootLayout;