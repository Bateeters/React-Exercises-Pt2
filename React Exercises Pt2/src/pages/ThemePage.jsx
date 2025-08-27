import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import "../css/Themes.css";

function ThemePage() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme; // set body class
  }, [theme]);

  return (
        <div>
            <h2>What's your favorite ice cream flavor?</h2>
            <p>It looks like it's currently {theme}!</p>
            <div>
                <button onClick={() => setTheme("vanilla")}>Vanilla</button>
                <button onClick={() => setTheme("chocolate")}>Chocolate</button>
                <button onClick={() => setTheme("strawberry")}>Strawberry</button>
                <button onClick={() => setTheme("mint")}>Mint</button>
            </div>
            <br />
            <Link to="/"><button>Return Home</button></Link>
        </div>
  );
}

export default ThemePage