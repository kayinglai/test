import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
}

function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {todos.map(todo => (
                <li key={todo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <input type='checkbox' onChange={() => toggleTodo(todo.id)} />
                    <span>{todo.text}</span>
                    <button onClick={() => removeTodo(todo.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const myUUID = uuidv4();
        const newTodo = { id: myUUID, text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </>
    );

}

export default App;


