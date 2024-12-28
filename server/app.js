const express = require('express');

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

module.exports = app;