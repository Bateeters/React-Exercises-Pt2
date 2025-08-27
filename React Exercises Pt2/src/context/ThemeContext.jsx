import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  // useLocalStorage instead of useState
  const [theme, setTheme] = useLocalStorage("theme", "");

useEffect(() => {
    document.body.className = theme; // set body class
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider