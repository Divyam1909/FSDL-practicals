import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [input, setInput] = useState('');
  useEffect(() => { localStorage.setItem('tasks', JSON.stringify(tasks)); }, [tasks]);
  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input]);
    setInput('');
  };
  const deleteTask = idx => setTasks(tasks.filter((_, i) => i !== idx));
  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>React To-Do List</h2>
      <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTask()} placeholder="Add a task" />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
            <span>{t}</span>
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 