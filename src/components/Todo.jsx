import React, { useReducer, useState } from 'react';

// Define action types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Initial state for the to-do list
const initialState = {
    todos: []
};

// Reducer function
function reducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        default:
            throw new Error('Unknown action type');
    }
}

// ToDo Component
function ToDo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch({ type: ADD_TODO, payload: newTodo });
            setNewTodo('');
        }
    };

    const handleRemoveTodo = id => {
        dispatch({ type: REMOVE_TODO, payload: id });
    };

    const handleToggleTodo = id => {
        dispatch({ type: TOGGLE_TODO, payload: id });
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new to-do"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {state.todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => handleToggleTodo(todo.id)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
