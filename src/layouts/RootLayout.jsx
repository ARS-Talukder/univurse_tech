import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/Shared/ScrollToTop";
import BackToTop from "../components/Shared/BackToTop";
import WhatsAppChat from "../components/Shared/WhatsAppChat";

const RootLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Outlet />
            <WhatsAppChat />
            <BackToTop />
        </>
    );
};

export default RootLayout;