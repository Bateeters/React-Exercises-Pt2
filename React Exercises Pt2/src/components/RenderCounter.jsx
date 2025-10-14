import { useRef } from "react";

function RenderCounter() {
    const renderCount = useRef(0); // creates an object: { current: 0 }
    renderCount.current++; // increments each time this component renders

    return(
        <p>This component has been rendered {renderCount.current} times.</p>
    )
}

export default RenderCounter;