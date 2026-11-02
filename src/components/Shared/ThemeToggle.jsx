import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/theme";

const ThemeToggle = ({ className = "" }) => {
    const { isDark, toggleTheme } = useTheme();
    const nextTheme = isDark ? "light" : "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} mode`}
            title={`Switch to ${nextTheme} mode`}
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${className}`}
        >
            {isDark ? (
                <FiSun className="h-5 w-5" aria-hidden="true" />
            ) : (
                <FiMoon className="h-5 w-5" aria-hidden="true" />
            )}
        </button>
    );
};

export default ThemeToggle;
