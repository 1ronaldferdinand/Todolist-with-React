import { useEffect, useState } from "react";

const Header = ({setRefresh}) => {
    const [title, setTitle] = useState("");

    const addTodo = () => {
        const newTodo = {title, done: false}

        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
            setTitle("")
            setRefresh(true)
            console.log('new todo added.')
        });
    }

    return (
        <div id="todo-header" className="header">
            <h2>Simple Todo App</h2>
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
            </input>
            <span className="add-button" onClick={addTodo}>Add</span>
        </div>
    )
}

export default Header;