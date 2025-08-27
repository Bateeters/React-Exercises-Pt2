import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function ThemeSelection() {
    const { theme } = useContext(ThemeContext);

    function seeCurrentTheme() {
        alert(`The current theme is set to ${theme}.`)
    }

    return (
        <div>
            <h3>14. Theme Context</h3>
            <h5>Goal: Use Context to share theme across components.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a ThemeContext with React.createContext()</li>
                <li>Provide context from a top-level ThemeProvider.</li>
                <li>Use useContext() in children to access or toggle theme.</li>
                <li>Apply conditional styles based on theme.</li>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <Link to="/ThemePage"><button>Theme Selection</button></Link>
            <button onClick={() => seeCurrentTheme()}>What's the current theme?</button>
            <br /><br />
        </div>
    )
}

export default ThemeSelection