import { useState, useEffect } from "react";
import { searchWger } from "../services/api";

function FetchPosts() {

    const [exercise, setExercise] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSearchResults = async () => {
            try {
                const searchResults = await searchWger();

                // Adding fake delay to show a little of "Loading screen"
                await new Promise(resolve => setTimeout(resolve, 1000));

                setExercise(searchResults)
            } catch (err) {
                console.log(err);
                setError("Failed to load from API...")
            } finally {
                setLoading(false)
            }
        }
        loadSearchResults()
    }, [])

    const handleSearch = async () => {
        setLoading(true);
        try {
            const results = await searchWger("exerciseinfo");

            // Fake delay of 2 seconds
            await new Promise(resolve => setTimeout(resolve, 2000));

            setExercise(results);
        } catch (err) {
            console.log(err);
            setError("Search failed...");
        } finally {
            setLoading(false);
        }
    };

    return(
        <div>
            <h3>11. Fetch and Display Data </h3>
            <h5>Goal: Fetch from an API and display the result.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a component called FetchPosts.</li>
                <li>Use useEffect() to fetch data on mount.</li>
                <li>Store data in a state variable.</li>
                <li>Display loading state before data is ready.</li>
                <li>Use .map() to render items.</li>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <button onClick={() => handleSearch()}>Exercise API Test</button>
            {loading ? (
                    <div>Loading Results... (Forced Pause Here)</div>
                ):(
                    <ul>
                        {exercise.map(item => (
                            <li key={item.id}>
                                {item.translations.find(t => t.language === 2)?.name || "No English name"}
                            </li>

                        ))}
                    </ul>
                )}
            <br /><br />

        </div>
    )
}

export default FetchPosts