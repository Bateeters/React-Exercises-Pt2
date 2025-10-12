import CounterButton from "./CounterButton";
import Form from "./Form";
import TodoListExample from "./TodoListExample";

function UseStateExploration(){
    return (
        <>

            <h2>useState Exploration</h2>
            <br/>
            <h4>Beginner Example</h4>
            <CounterButton/>

            <br/><br/>
            <h4>Intermediate Example</h4>
            <TodoListExample/>

            <br/>
            <h4>Advanced Example</h4>
            <Form/>

        </>
    )
}

export default UseStateExploration;