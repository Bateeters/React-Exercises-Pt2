import { useEffect, useState } from "react";

function PageTitleChange(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        // this will update the document title (web tab) every time "count" changes
        document.title = `Title Changed ${count} times`;
    }, [count]);
    
    return (
        <>
            <button onClick={() => setCount(count+1)}>
                Click to change page title.
            </button>
        </>
    )
}

export default PageTitleChange;