import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState({});
  const validate = () => {
    const e = {};
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) e.email = 'Invalid email';
    if (pass.length < 6) e.pass = 'Password must be 6+ chars';
    setErr(e);
    return Object.keys(e).length === 0;
  };
  const submit = e => {
    e.preventDefault();
    if (validate()) alert('Registered!');
  };
  return (
    <form onSubmit={submit} style={{ maxWidth: 320, margin: '40px auto', background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px #0001', fontFamily: 'Arial' }}>
      <h2>Register</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" style={{ width: '100%', marginBottom: 8 }} />
      <div style={{ color: 'red', fontSize: 13 }}>{err.email}</div>
      <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Password" style={{ width: '100%', marginBottom: 8 }} />
      <div style={{ color: 'red', fontSize: 13 }}>{err.pass}</div>
      <button type="submit">Register</button>
    </form>
  );
}

export default App; 