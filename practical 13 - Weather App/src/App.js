import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    // Placeholder for real API call
    setWeather({
      temp: '25°C',
      description: 'Sunny',
      city: city
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather App</h1>
      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={getWeather} style={{ marginLeft: '10px' }}>Get Weather</button>
      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h2>{weather.city}</h2>
          <p>Temperature: {weather.temp}</p>
          <p>Condition: {weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App; 