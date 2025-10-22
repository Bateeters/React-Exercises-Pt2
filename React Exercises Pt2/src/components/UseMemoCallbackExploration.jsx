import ReactMemoExample from "./ReactMemoExample";
import UseCallbackFunction from "./UseCallbackFunction";
import UseMemoCalc from "./UseMemoCalc";

function UseMemoCallbackExploration() {
    return (
        <>
        
            <h2>useMemo and useCallback Exploration</h2>
            <br/>
            <h4>Beginner Example</h4>
            <UseMemoCalc />

            <br/>
            <h4>Intermediate Example</h4>
            <UseCallbackFunction/>
            <br/>
            <h4>Advanced Example</h4>
            <ReactMemoExample/>
            <hr/>

        </>
    )
}

export default UseMemoCallbackExploration;