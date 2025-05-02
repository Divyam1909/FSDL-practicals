const express = require('express');
const app = express();
app.use(express.json());

let books = [
  { title: 'The Alchemist', author: 'Paulo Coelho' },
  { title: '1984', author: 'George Orwell' }
];

app.get('/books', (req, res) => res.json(books));
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: 'Title and author required' });
  books.push({ title, author });
  res.status(201).json({ message: 'Book added' });
});

app.listen(3000, () => console.log('API running on port 3000')); 