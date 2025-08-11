import { useState } from "react"

function Counter() {
    let [counter, setCounter] = useState(0)
    let [oddOrEven, setOddOrEven] = useState(null)

    const increaseCount = () => {
        setCounter(++counter)
        oddOrEvenNumber(counter)
    }

    const decreaseCount = () => {
        setCounter(--counter)
        oddOrEvenNumber(counter)
    }

    const resetCount = () => {
        setCounter(0)
        setOddOrEven(null)
    }

    function oddOrEvenNumber(counter) {
        if (counter === 0) {
            setOddOrEven(null)
        } else {
            if (counter%2 === 1) {
                setOddOrEven("Odd")
            } else {
                setOddOrEven("Even")
            }
        }
    }

    return (
        <div>
            <h3>1. Counter Component</h3>
            <h5>Goal: Create a Simple counter with increase, decrease, and reset functionality.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a new component called Counter.</li>
                <li>Initialize a count state variable using useState(0)</li>
                <li>Render the current count.</li>
                <li>Add three buttons: "Increase", "Decrease", and "Reset."</li>
                <li>Attach onClick handlers to update the state accordingly.</li>
                <li>Optional: Display whether the number is even or odd.</li>
            </ol>
            <br/>
            <p>Exercise Solution:</p>
            <p>{counter} : {oddOrEven}</p>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
            <br /><br /><br />
        </div>
    )
}

export default Counter