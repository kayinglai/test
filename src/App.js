import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ parentFunction }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      parentFunction(text);
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

function TodoList({ parentStateArray }) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {parentStateArray.map(todo => (
        <li key={todo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input type='checkbox' />
          <span>{todo.text}</span>
          <button>X</button>
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const myUUID = uuidv4();
    console.log(myUUID);

    const newTodo = { id: myUUID, text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    todos.filter(todo => todo.id !== id)



    //setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm parentFunction={addTodo} />
      <TodoList parentStateArray={todos} />
    </>
  );

}

export default App;


