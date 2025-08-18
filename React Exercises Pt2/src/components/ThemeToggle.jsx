import { useState } from "react";
import '../css/ThemeToggle.css'

function ThemeToggle() {

    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    }

    return(
        <div>
            <h3>5. Light/Dark Theme Toggle</h3>
            <h5>Goal: Toggle between light and dark themes.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a new component called ThemeToggle.</li>
                <li>Create a state variable isDark with useState(false).</li>
                <li>Use conditional classNames or inline styles for light/dark themes.</li>
                <li>Add a button to toggle isDark.</li>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <div className={isDark ? "dark-theme" : "light-theme"}>
                <div className="card">
                    <h3>Which Theme Do You Prefer:</h3>
                    <p>{isDark ? "or Dark?" : "Light?" }</p>
                </div>
                <button className="btn" onClick={toggleTheme}>Switch Display Mode</button>
            </div>
            <br /><br />
        </div>
    )
}

export default ThemeToggle