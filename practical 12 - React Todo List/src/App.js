import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Todo List</h1>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo} style={{ marginLeft: '10px' }}>Add</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, idx) => (
          <li key={idx} style={{ margin: '10px 0' }}>
            {todo}
            <button onClick={() => removeTodo(idx)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 