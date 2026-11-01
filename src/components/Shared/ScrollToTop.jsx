
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Let ScrollToHash handle section navigation
        if (hash) return;

        // Don't force scrolling when navigating to Home
        if (pathname === "/") return;

        // Scroll to top on other pages
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname, hash]);

    return null;
}
