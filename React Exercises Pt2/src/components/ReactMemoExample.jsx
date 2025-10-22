import React, { useCallback } from "react";

const Child = React.memo(({ compute }) => {
    // Child component wrapped in React.memo
    // This means React will ONLY re-render it if props change
    console.log("Child rendered");
    return <p>Computed Value: {compute(10)}</p>;
});

function ReactMemoExample(){
    const compute = useCallback((n) => n * 2, []);
    // useCallback ensures the same function reference across re-renders
    // so <Child/> doesn't think props changed
    console.log("Parent rendered");

    return (
        <div>
            <Child compute={compute}/>
            {/* The Child won't re-render unless 'compute' changes,
                which only happens if the dependency array changes */}
        </div>
    );
}

export default ReactMemoExample