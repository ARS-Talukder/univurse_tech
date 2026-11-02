import { Outlet } from "react-router-dom";
// import ScrollToTop from "../components/Shared/ScrollToTop";
import BackToTop from "../components/Shared/BackToTop";
import WhatsAppChat from "../components/Shared/WhatsAppChat";
import ScrollToHash from "../components/Shared/ScrollToHash";
import ScrollToTop from "../components/Shared/ScrollToTop";

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <ScrollToTop />
            <ScrollToHash />


            <Outlet />


            <WhatsAppChat />
            <BackToTop />
        </div>
    );
};

export default RootLayout;
