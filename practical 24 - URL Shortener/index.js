const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Use your actual password here or load it from environment variables
const password = encodeURIComponent('divyam@1909');
const uri = `mongodb+srv://itdep202427:${password}@cluster0.oiex4nk.mongodb.net/urlshort?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Url = mongoose.model('Url', { code: String, long: String });

function genCode() {
  return Math.random().toString(36).substr(2, 6);
}

app.post('/shorten', async (req, res) => {
  const { long } = req.body;
  const code = genCode();
  await new Url({ code, long }).save();
  res.json({ short: `http://localhost:3000/${code}` });
});

app.get('/:code', async (req, res) => {
  const url = await Url.findOne({ code: req.params.code });
  if (url) return res.redirect(url.long);
  res.status(404).send('Not found');
});

app.listen(3000, () => console.log('URL Shortener running on port 3000'));
