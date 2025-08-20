import { useState } from "react";

function SearchFilter(){

    const fruits = [
        "Apple",
        "Banana",
        "Orange",
        "Grape",
        "Strawberry",
        "Blueberry",
        "Raspberry",
        "Blackberry",
        "Cherry",
        "Mango",
        "Pineapple",
        "Star fruit"
    ]

    const [fruitSearch, setFruitSearch] = useState("")
    const [fruitList, setFruitList] = useState(fruits)

    function searchArray(query) {
        const input = query.toLowerCase().trim();
        const filtered = fruits.filter((fruit) => fruit.toLowerCase().includes(input));
        setFruitList(filtered);
    }

    return(
        <div>
            <h3>9. Search Filter </h3>
            <h5>Goal: Filter a list based on user input.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a new component called SearchFilter.</li>
                <li>Have a list of items (names, etc.).</li>
                <li>Track the search query with useState.</li>
                <li>Use .filter() to create a filtered array.</li>
                <li>Render the filtered array.</li>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <input type="text" placeholder="Search for fruit..." value={fruitSearch} onChange = {(e) => setFruitSearch(e.target.value)}/>
            <button onClick={() => searchArray(fruitSearch)}>Search</button>
            <ul>
                {fruitList.map((fruit) => (
                    <li key={fruit.id}>{fruit}</li>
                ))}
            </ul>
            <br /><br />

        </div>
    )
}

export default SearchFilter