import { useReducer, useState } from "react";

function todoReducer(state, action) {
    switch (action.type) {
        case "add": return [...state, { text: action.text, done: false }]; // creating case type add
        case "toggle": return state.map((t, i) => i === action.index ? { ...t, done: !t.done } : t); // creating case type toggle for finished and unfinished tasks
        default: return state;
    }
}

function TodoReducerExample() {
    const [todos, dispatch] = useReducer(todoReducer, []); // creating useReducer similar to useState, initializing default as empty array
    const [text, setText] = useState(""); // creating useState for individual task text

    const handleAdd = () => { // creating task add handler
        if (text.trim() === "") return;
        dispatch({type: "add", text }); // using the useReducer type "add" and the current state of text to create new todo task
        setText(""); // setting text state field back to empty
    };

    return (
        <div>
            <input type="text" value={text}
            onChange={(e) => setText(e.target.value)} // linking input to auto-update text when typing
            placeholder="Add task..."/>
            <button onClick={handleAdd}>Add</button>

            <ul>{todos.map((todo, index) => (
                <li
                key={index}
                onClick={() => dispatch({type: "toggle", index})} // toggle todo task between done and not done on click
                style={{ textDecoration: todo.done ? "line-through" : "none", // checking to see if todo is completed and styling accordingly
                    color: todo.done ? "lightgray" : "black",
                    cursor: "pointer",
                }}
                >{todo.text}</li>
            ))}
            </ul>
        </div>
    )
}

export default TodoReducerExample