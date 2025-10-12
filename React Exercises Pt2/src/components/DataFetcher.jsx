import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // controls cancelation
    const signal = controller.signal;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", { signal });

        // making sure response was successful
        if (!response.ok) throw new Error("Network response was not ok");

        const json = await response.json();
        setData(json.slice(0, 5)); // Showing just the first 5 for demo purposes
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", err);
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // cleanup runs if the component unmounts or effect re-runs
    return () => controller.abort();
  }, []); // empty deps → runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h3>Fetched Posts From API</h3>
      <ul>
        {data.map((post, id) => (
          <li key={id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher
