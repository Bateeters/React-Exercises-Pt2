import { useReducer } from "react";

function counterReducer(state, action) {
    switch (action.type) {
        case "increment": return {count: state.count +1}; // creating case type "increment"
        case "decrement": return {count: state.count -1}; // creating case type "decrement"
        default: return state; // providing default if something undefined is used
    }
}

function CounterReducerExample(){
    const [state, dispatch] = useReducer(counterReducer, {count: 0}); // setting up reducer using the counterReducer function and initial state value of 0

    return(
        <>
        {
        // calling dispatch to access counterReducer function and set it to either "increment" or "decrement"
        }
        <button onClick={() => dispatch({type: "increment"})}>+</button> 
        <span style={{padding: "15px"}}>{state.count}</span>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>
        </>
    )
}

export default CounterReducerExample