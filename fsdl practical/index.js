const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const user = process.env.MONGO_USER;
const pass = encodeURIComponent(process.env.MONGO_PASS); // encode special characters
const cluster = process.env.MONGO_CLUSTER;
const db = process.env.MONGO_DB;

const uri = `mongodb+srv://${user}:${pass}@${cluster}/${db}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Define model
const Url = mongoose.model('Url', {
  code: String,
  long: String,
});

// Helper: generate 6-character code
function genCode() {
  return Math.random().toString(36).substr(2, 6);
}

// HTML UI
const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Simple URL Shortener</title>
</head>
<body>
  <h1>URL Shortener</h1>
  <form method="POST" action="/shorten">
    <input type="url" name="long" placeholder="Enter long URL" required />
    <button type="submit">Shorten</button>
  </form>
  %RESULT%
</body>
</html>
`;

// Home page
app.get('/', (req, res) => {
  res.send(html.replace('%RESULT%', ''));
});

// Shorten URL
app.post('/shorten', async (req, res) => {
  const { long } = req.body;
  if (!long) return res.send(html.replace('%RESULT%', `<p style="color:red;">Missing URL!</p>`));

  const code = genCode();
  await new Url({ code, long }).save();

  const shortUrl = `http://localhost:3000/${code}`;
  res.send(html.replace('%RESULT%', `<p>Short URL: <a href="${shortUrl}">${shortUrl}</a></p>`));
});

// Redirect by code
app.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ code: req.params.code });
    if (url) return res.redirect(url.long);
    res.status(404).send('URL not found');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(3000, () => console.log('🌐 App running at http://localhost:3000'));
