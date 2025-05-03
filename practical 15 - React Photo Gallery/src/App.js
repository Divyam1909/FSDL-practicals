import React from 'react';

const photos = [
  { src: 'https://picsum.photos/id/1015/300/200', title: 'Mountain' },
  { src: 'https://picsum.photos/id/1016/300/200', title: 'River' },
  { src: 'https://picsum.photos/id/1018/300/200', title: 'Forest' },
  { src: 'https://picsum.photos/id/1020/300/200', title: 'Desert' },
  { src: 'https://picsum.photos/id/1024/300/200', title: 'Dog' }
];

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Photo Gallery</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {photos.map((photo, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10 }}>
            <img src={photo.src} alt={photo.title} style={{ width: 300, height: 200, objectFit: 'cover', borderRadius: 4 }} />
            <div style={{ marginTop: 8 }}>{photo.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App; 