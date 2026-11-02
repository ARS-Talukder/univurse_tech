import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./theme";

const STORAGE_KEY = "univurse-theme";
const getInitialTheme = () => {
    const documentTheme = document.documentElement.dataset.theme;

    if (documentTheme === "light" || documentTheme === "dark") {
        return documentTheme;
    }

    return "dark";
};

const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", theme === "dark" ? "#020617" : "#f8fafc");
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        applyTheme(theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    useEffect(() => {
        const syncTheme = (event) => {
            if (event.key === STORAGE_KEY && (event.newValue === "light" || event.newValue === "dark")) {
                setTheme(event.newValue);
            }
        };

        window.addEventListener("storage", syncTheme);
        return () => window.removeEventListener("storage", syncTheme);
    }, []);

    const value = useMemo(
        () => ({
            theme,
            isDark: theme === "dark",
            setTheme,
            toggleTheme: () => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark"),
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

