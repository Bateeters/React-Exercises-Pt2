import { useState } from "react"


function TodoList(){
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleInput = () => {
        if (inputValue.trim() === "") return;
        const newTodo = { id: Math.random(), text: inputValue}
        setTodos([...todos, newTodo])
        setInputValue("")
        console.log(todos)
    }

    return(
        <div>
            <h3>4. Simple To-Do List</h3>
            <h5>Goal: Create a to-do list with add and delete functionality.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a component called TodoList.</li>
                <li>Create state variables: todo (array) and inputValue (string).</li>
                <li>Render an input and button to add new todos.</li>
                <li>Use .map() to render todo items.</li>
                <li>Add a delete button next to each todo.</li>
                <li>Filter the todos array on delete</li>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <input 
                type="text" 
                placeholder="Enter your task..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleInput}>Add</button>
            <ul>
            {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}
                        <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}>X</button>
                    </li>
            ))}
            </ul>
            <br /><br />

        </div>
    )
}

export default TodoList