import { Toaster } from "react-hot-toast";
import { useTheme } from "../../context/theme";

const ThemedToaster = () => {
    const { theme } = useTheme();

    return (
        <Toaster
            key={theme}
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                style: {
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    color: theme === "dark" ? "#f1f5f9" : "#0f172a",
                    border: `1px solid ${theme === "dark" ? "#334155" : "#cbd5e1"}`,
                },
            }}
        />
    );
};

export default ThemedToaster;
