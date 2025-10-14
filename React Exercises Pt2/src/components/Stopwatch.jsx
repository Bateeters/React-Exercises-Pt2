import { useRef, useState } from "react";

function Stopwatch() {
    const startTimeRef = useRef(null); // Creating empty startTimeRef
    const [elapsed, setElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    function start() { // setting the current startTimeRef to current time
        startTimeRef.current = Date.now();
        setIsRunning(true) // Set isRunning to true
    }

    function stop() {
        if (!isRunning) return; // Checking to see if isRunning is true (start was clicked first)
        setElapsed(Date.now() - startTimeRef.current) // subtracting current startTimeRef from the current time to calculate elapsed time
        setIsRunning(false) // Setting isRunning to false
    }

    return (
        <>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            {
            // Converting elapsed time to seconds from ms
            }
            <p>Time Elapsed: {elapsed/1000}s</p>
        </>
    )
}

export default Stopwatch