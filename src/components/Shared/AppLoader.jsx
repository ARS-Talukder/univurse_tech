import { useEffect, useState } from "react";
import Loading from "./Loading";

const AppLoader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(
        document.readyState !== "complete"
    );

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return children;
};

export default AppLoader;