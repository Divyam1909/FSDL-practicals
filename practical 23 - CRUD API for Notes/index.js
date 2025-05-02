const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notesdb');
const Note = mongoose.model('Note', { title: String, content: String });

app.get('/notes', async (req, res) => res.json(await Note.find()));
app.post('/notes', async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.status(201).json(note);
});
app.put('/notes/:id', async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(note);
});
app.delete('/notes/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(3000, () => console.log('Notes API running on port 3000')); 