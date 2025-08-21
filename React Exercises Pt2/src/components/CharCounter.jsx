import { useState } from "react";
import "../css/CharCounter.css"

function CharCounter() {

    const [currentChar, setCurrentChar] = useState("")

    const specialCharsRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const rules = [
        {rule: "10 Characters Minimum", valid: currentChar.length >= 10},
        {rule: "1 Capital Letter Minium", valid: /[A-Z]/.test(currentChar)},
        {rule: "1 Number Minimum", valid: /\d/.test(currentChar)},
        {rule: "1 Symbol Minimum (!, @, #, $, etc.)", valid: specialCharsRegex.test(currentChar)},
        {rule: "No Spaces", valid: !currentChar.includes(" ")}
    ]

    return(
        <div>
            <h3>10. Character Counter </h3>
            <h5>Goal: Display character count of a text input.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a new component called CharCounter.</li>
                <li>Track input value with useState</li>
                <li>Display character count below input.</li>
                <li>Add a limit and warning when close to it.</li>
                <li><strong>Optional: Change this to mimic a password creator.</strong></li>
                <ol>
                    <li>Set up an array with all the rules of a typical password creator</li>
                    <li>Use .map() to populate all the rules under input</li>
                    <li>Use the single useState previously set up to check all of the requirements. Hint: I found this can all be done inside the array.</li>
                    <li>Use conditional statements to change color or requirements based on boolean. </li>
                </ol>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <input type="text" value={currentChar} onChange={(e) => setCurrentChar(e.target.value.trim())} placeholder="Enter text here..."/>
            <ul>
                {rules.map((rule) => (
                    <li className={ rule.valid ? "green" : "red"}>{rule.rule}</li>
                ))}
            </ul>
            <br /><br />

        </div>
    )
}

export default CharCounter