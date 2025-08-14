import { useState } from "react"

function LiveText() {
    let [text, setText] = useState("")

    return(
        <div>
            <h3>2. Real-Time Text Display</h3>
            <h5>Goal: Create an input that reflects life text below it.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a new component called LiveText.</li>
                <li>Create a state variable text with useState("").</li>
                <li>Create an input field with value = text and onChange to update status</li>
                <li>Below the input, render the value of text.</li>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <input type="text" value={text} placeholder="Enter text here..." onChange={(e) => setText(e.target.value)}/>
            <p>{text}</p>
            <br /><br />

        </div>
    )
}

export default LiveText