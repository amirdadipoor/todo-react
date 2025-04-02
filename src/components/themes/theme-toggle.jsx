import useTheme from "./use-theme";

const ThemeToggle = () => {
    const [theme, setTheme] = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border bg-gray-200 dark:bg-gray-700"
        >
            {theme === "dark" ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeToggle;