import { useState } from "react";

function TodoListExample() {
    const [todos, setTodos] = useState([])

    function addTodo() {
        // we pass prev inside setTodos() to get everything currently in the todos array
        // we then use ...prev to make sure we have everything that is currently in the array 
        // then we append the "Task n" to the end of the array
        setTodos((prev) => [...prev, `Task ${prev.length +1}`]);
    }

    return (
        <>
            <button onClick={addTodo}>Add Task</button>
            <ul>
                {todos.map((todo, id) =>(
                    <li key={id}>{todo}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoListExample;