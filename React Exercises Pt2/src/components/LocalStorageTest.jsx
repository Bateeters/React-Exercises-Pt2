import useLocalStorage from "../hooks/useLocalStorage.jsx";

function LocalStorageTest() {
  const [count, setCount] = useLocalStorage("myCount" ,0);

  return (
    <div>
        <h3>15. Custom Hook: useLocalStorage</h3>
        <h5>Goal: Persist state in localStorage via custom hook.</h5>
        <p>Steps:</p>
        <ol>
            <li>Create a hook useLocalStorage(key, defaultValue).</li>
            <li>Initialize state from localStorage or fallback.</li>
            <li>Use useEffect to write to localStorage on state change.</li>
            <li>Replace useState with useLocalStorage in a component.</li>
        </ol>
        <br />
        <p>Exercise Solution:</p>
            <p>You clicked {count} times.</p>
            <p>Navigate to a different page (or refresh) to see if it saves your count!</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        <br /><br />
    </div>
  );
}

export default LocalStorageTest;
