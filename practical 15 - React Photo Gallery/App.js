import React, { useState } from 'react';

const images = [
  { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200', cat: 'Nature' },
  { url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200', cat: 'People' },
  { url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200', cat: 'Nature' },
  { url: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=200', cat: 'Animals' },
  { url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=200', cat: 'People' }
];
const cats = ['All', ...Array.from(new Set(images.map(i => i.cat)))];

function App() {
  const [cat, setCat] = useState('All');
  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>Photo Gallery</h2>
      <div style={{ marginBottom: 16 }}>
        {cats.map(c => (
          <button key={c} onClick={() => setCat(c)} style={{ marginRight: 8, background: cat === c ? '#007bff' : '#eee', color: cat === c ? '#fff' : '#000' }}>{c}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {images.filter(i => cat === 'All' || i.cat === cat).map((img, i) => (
          <img key={i} src={img.url} alt={img.cat} style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 6 }} />
        ))}
      </div>
    </div>
  );
}

export default App; 