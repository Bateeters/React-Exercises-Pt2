import { useEffect, useState } from "react"


function Timer() {
    const [seconds, setSeconds] = useState(0)

    // used to keep track and update "seconds" state every second
    useEffect(() => {
        // setInterval(func, delay) is used to update the seconds state every second (1000ms)
        const timer = setInterval(() => setSeconds((s) => s+1), 1000);

        // clearInterval is used to stop a repeating action (i.e. one from setInterval)
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <p>It has been {seconds} seconds since component reload.</p>
        </>
    )

}

export default Timer