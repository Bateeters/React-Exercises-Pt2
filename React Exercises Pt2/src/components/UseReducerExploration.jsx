import CounterReducerExample from "./CounterReducerExample";
import FetchProvider, { DataViewer } from "./FetchProvider";
import TodoReducerExample from "./TodoReducerExample";

function UseReducerExploration() {
    return (
        <>
        
            <h2>useReducer Exploration</h2>
            <br/>
            <h4>Beginner Example</h4>
            <CounterReducerExample/>

            <br/>
            <h4>Intermediate Example</h4>
            <TodoReducerExample/>

            <br/>
            <h4>Advanced Example</h4>
            <FetchProvider>
                <h2>Advanced useReducer + useContext</h2>
                <DataViewer />
            </FetchProvider>
            <hr/>

        </>
    )
}

export default UseReducerExploration;