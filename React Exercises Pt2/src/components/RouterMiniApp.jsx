import { Link } from "react-router-dom"


function RouterMiniApp() {
    
    return (
        <div>
            <h3>13. React Router Mini App</h3>
            <h5>Goal: Create navigation between pages.</h5>
            <p>Steps:</p>
            <ol>
                <li>Install react-router-dom</li>
                <li>Wrap App with "BrowserRouter".</li>
                <li>Set up routes for Home and About pages</li>
                <li>Create HomePage and AboutPage components</li>
                <li>Use "Link" to navigate between the two.</li>
            </ol>
            <br/>
            <p>Exercise Solution:</p>
                <Link to="/"><button>Exercise List</button></Link>
                <Link to="/about"><button>About</button></Link>
            <br /><br />
        </div>
    )
}

export default RouterMiniApp