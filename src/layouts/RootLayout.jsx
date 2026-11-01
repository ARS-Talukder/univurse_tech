import { Outlet } from "react-router-dom";
// import ScrollToTop from "../components/Shared/ScrollToTop";
import BackToTop from "../components/Shared/BackToTop";
import WhatsAppChat from "../components/Shared/WhatsAppChat";
import ScrollToHash from "../components/Shared/ScrollToHash";
import ScrollToTop from "../components/Shared/ScrollToTop";

const RootLayout = () => {
    return (
        <>
            <ScrollToTop />
            <ScrollToHash />


            <Outlet />


            <WhatsAppChat />
            <BackToTop />
        </>
    );
};

export default RootLayout;