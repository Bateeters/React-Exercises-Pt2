import React, { useCallback, useState } from "react";

// Wrap the child in React.memo
// This tells React: "Only re-render this if props change"
const Child = React.memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
});

function UseCallbackFunction() {
  const [count, setCount] = useState(0);

  // useCallback ensures this function reference stays the same
  // across renders (because [] never changes)
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
      <p>Parent re-render count: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallbackFunction;