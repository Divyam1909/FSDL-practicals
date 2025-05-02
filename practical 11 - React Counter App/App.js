import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ maxWidth: 300, margin: '40px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>Counter</h2>
      <div style={{ fontSize: '2em', margin: '20px 0' }}>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>{' '}
      <button onClick={() => setCount(count - 1)}>Decrement</button>{' '}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App; 