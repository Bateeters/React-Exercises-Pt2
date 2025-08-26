import { Link } from "react-router-dom"

function AboutPage() {
    
    return (
        <div>
            <h1>Suprise! We have an interior page now!</h1>
            <p>Special thanks to the following:</p>
            <ul>
                <li>react-router-dom</li>
                <li>BrowserRouter</li>
                <li>Routes</li>
                <li>Route</li>
                <li>Link</li>
                <li>Coffee</li>
                <li>Cat snuggles at the desk</li>
            </ul>
            <Link to="/"><button>Exercise List</button></Link>
            <Link to="/about"><button>About</button></Link>
        </div>
    )
}

export default AboutPage