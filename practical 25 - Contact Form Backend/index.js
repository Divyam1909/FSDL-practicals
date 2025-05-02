const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/contactdb');
const Contact = mongoose.model('Contact', { name: String, email: String, message: String });

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'All fields required' });
  await new Contact({ name, email, message }).save();
  res.status(201).json({ message: 'Submitted' });
});

app.listen(3000, () => console.log('Contact API running on port 3000')); 