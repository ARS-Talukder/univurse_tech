import { useEffect, useState } from "react";
import Loading from "./Loading";

const MIN_LOADING_TIME = 1400;

const AppLoader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let loadComplete = document.readyState === "complete";
        let minimumTimeComplete = false;

        const finishLoading = () => {
            if (loadComplete && minimumTimeComplete) {
                setIsLoading(false);
            }
        };

        const minimumTimer = window.setTimeout(() => {
            minimumTimeComplete = true;
            finishLoading();
        }, MIN_LOADING_TIME);

        const handleWindowLoad = () => {
            loadComplete = true;
            finishLoading();
        };

        if (loadComplete) {
            finishLoading();
        } else {
            window.addEventListener("load", handleWindowLoad);
        }

        return () => {
            window.clearTimeout(minimumTimer);
            window.removeEventListener("load", handleWindowLoad);
        };
    }, []);

    useEffect(() => {
        if (!isLoading) {
            return;
        }

        const fallbackTimer = window.setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => {
            window.clearTimeout(fallbackTimer);
        };
    }, [isLoading]);

    if (isLoading) {
        return <Loading />;
    }

    return children;
};

export default AppLoader;
