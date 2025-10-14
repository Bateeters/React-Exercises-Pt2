import { useRef } from "react"

function FocusInput() {
    const inputRef = useRef(null); // Creating empty inputRef

    function focus() {
        inputRef.current.focus(); // Creating a function that highlights "focuses" inputRef
    }

    return (
        <>  {
            // Assigns inputRef to this input field
            }
            <input type="text" ref={inputRef} placeholder="inputRef Field"/> 
            <button onClick={focus}>Focus the Input matching ref="inputRef"</button>
        </>
    );
}

export default FocusInput