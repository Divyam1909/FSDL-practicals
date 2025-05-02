const express = require('express');
const app = express();
app.use(express.json());

const user = { username: 'admin', password: '1234' };

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password)
    res.json({ status: 'success' });
  else
    res.json({ status: 'failure' });
});

app.listen(3000, () => console.log('Login API running on port 3000')); 