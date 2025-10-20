import { useMemo, useState } from "react";

function UseMemoCalc() {
  const [num, setNum] = useState(1);
  const [theme, setTheme] = useState("light");

  // Expensive computation (simulated with a loop)
  const result = useMemo(() => {
    console.log("Expensive calculation running...");
    let total = 0;
    for (let i = 0; i < 10; i++) {
      total += num * 2;
    }
    return total;
  }, [num]); // only runs again if num changes

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "1rem" }}>
        <p>re-render only happens when num is changed, not theme</p>
        <p>check console log</p>
        <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
        <p>Result: {result}</p>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Toggle Theme
        </button>
    </div>
  );
}

export default UseMemoCalc
