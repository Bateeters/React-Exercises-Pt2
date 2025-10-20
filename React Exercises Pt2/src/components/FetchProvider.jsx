// ===============================================
// Advanced Example: useReducer + useContext + useEffect
// ===============================================
// This component demonstrates a common pattern for managing async data fetching
// using a reducer for state logic, combined with React Context for global access.
// It’s a scalable alternative to prop drilling and useState-heavy setups.

import { createContext, useContext, useReducer, useEffect } from "react";


// ===============================================
// 1. Reducer Function
// ===============================================
// The reducer controls how the state changes based on the type of "action" dispatched.
// Think of it as a central "state manager" that reacts to events (actions).

function fetchReducer(state, action) {
    switch (action.type) {

        // Set loading state when a fetch request starts
        case "loading":
            return { ...state, loading: true, error: null };

        // Store data on successful fetch
        case "success":
            return { loading: false, data: action.payload, error: null };

        // Capture error messages when the request fails
        case "error":
            return { loading: false, data: null, error: action.error };

        // Default (no change)
        default:
            return state;
    }
}


// ===============================================
// 2. Create Context
// ===============================================
// Context allows us to make data (state + fetch function) available globally,
// so any component within <FetchProvider> can access it without prop drilling.

const FetchContext = createContext();


// ===============================================
// 3. Provider Component
// ===============================================
// Wraps children and provides context value (state + fetch function).
// The reducer handles all state transitions, while fetchData dispatches actions.

function FetchProvider({ children }) {

    // useReducer replaces multiple useState calls.
    // It provides 'state' (current data) and 'dispatch' (triggering state changes).
    const [state, dispatch] = useReducer(fetchReducer, {
        loading: false,
        data: null,
        error: null,
    });


    // ===============================================
    // fetchData function (async)
    // ===============================================
    // This is how we perform asynchronous data fetching
    // and communicate with the reducer via dispatch().
    const fetchData = async (url) => {

        // Step 1: Tell reducer we’re starting a fetch
        dispatch({ type: "loading" });

        try {
            // Step 2: Perform fetch call
            const response = await fetch(url);

            // Step 3: Check for network issues
            if (!response.ok) throw new Error("Network error");

            // Step 4: Parse JSON and dispatch success
            const data = await response.json();
            dispatch({ type: "success", payload: data });

        } catch (err) {
            // Step 5: Catch errors and send to reducer
            dispatch({ type: "error", error: err.message });
        }
    };

    // ===============================================
    // Provide Context to Children
    // ===============================================
    // Any component inside <FetchProvider> can now access:
    // 1. The current state (loading, data, error)
    // 2. The fetchData function
    return (
        <FetchContext.Provider value={{ state, fetchData }}>
            {children}
        </FetchContext.Provider>
    );
}


// ===============================================
// 4. Custom Hook: useFetchContext()
// ===============================================
// This helper hook simplifies access to our context.
// Instead of calling useContext(FetchContext) everywhere,
// we can just call useFetchContext().

export const useFetchContext = () => useContext(FetchContext);


// ===============================================
// 5. DataViewer Component
// ===============================================
// This is a consumer component that uses the Fetch Context.
// It triggers the data fetch on mount and displays results or errors.

export function DataViewer() {

    // Destructure state and fetchData from our context
    const { state, fetchData } = useFetchContext();

    // useEffect runs on component mount.
    // Here, it triggers fetchData once when the component first renders.
    useEffect(() => {
        fetchData("https://jsonplaceholder.typicode.com/posts/1");
    }, []); // Empty dependency = run only once

    // Conditional rendering for clarity
    if (state.loading) return <p>Loading...</p>;
    if (state.error) return <p style={{ color: "red" }}>Error: {state.error}</p>;

    // Display fetched data in a formatted <pre> block
    return (
        <div>
            <h3>Fetched Data:</h3>
            <pre>{JSON.stringify(state.data, null, 2)}</pre>
        </div>
    );
}


// ===============================================
// 6. Export the Provider as Default
// ===============================================
// This allows other files to wrap components with <FetchProvider>
// and share the same fetch logic + state across the app.

export default FetchProvider;
