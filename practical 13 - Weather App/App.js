import React from 'react';

function Weather({ city, temp, desc }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 20, maxWidth: 300, margin: '40px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>{city}</h2>
      <div style={{ fontSize: '2em' }}>{temp}°C</div>
      <div>{desc}</div>
    </div>
  );
}

function App() {
  return <Weather city="Mumbai" temp={32} desc="Sunny" />;
}

export default App; 