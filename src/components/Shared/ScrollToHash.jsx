import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const id = hash.substring(1);
        let observer;

        const scrollToSection = () => {
            const element = document.getElementById(id);

            if (!element) return false;

            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            return true;
        };

        // Try immediately
        if (scrollToSection()) {
            return;
        }

        // Keep watching until the lazy-loaded section appears
        observer = new MutationObserver(() => {
            if (scrollToSection()) {
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observer?.disconnect();
        };
    }, [hash]);

    return null;
};

export default ScrollToHash;