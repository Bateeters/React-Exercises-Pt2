import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("vanilla");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "vanilla" ? "chocolate" : "vanilla"));
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider