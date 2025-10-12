import DataFetcher from "./DataFetcher";
import PageTitleChange from "./PageTitleChange";
import Timer from "./Timer";

function UseEffectExploration() {
    return (
        <>
        
            <h2>useEffect Exploration</h2>
            <br/>
            <h4>Beginner Example</h4>
            <Timer/>

            <br/>
            <h4>Intermediate Example</h4>
            <PageTitleChange/>

            <br/><br/>
            <h4>Advanced Example</h4>
            <DataFetcher/>

        </>
    )
}

export default UseEffectExploration;