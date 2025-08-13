import { useState } from "react";

function ToggleMessage() {
    let [visible, setVisible] = useState(true);

    const visibilityToggle = () => {
        setVisible (prev => !prev);
    };

    return(
        <div>
            <h3>3. Toggle Visibility</h3>
            <h5>Goal: Toggle visibility of a message with a button.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a new component called ToggleMessage.</li>
                <li>Initialize a state variable visible as useState(true).</li>
                <li>Display a message on if visible is true</li>
                <li>Add a button that toggles visible when clicked.</li>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <br />
            <button onClick={visibilityToggle}>Toggle Visiblity</button>

            {visible ? (
                <p>You can see me!</p>
            ):(
                <p style={{display: 'none'}}>You cannot see me!</p>
            )}
            <br /><br />

        </div>
    )
}

export default ToggleMessage