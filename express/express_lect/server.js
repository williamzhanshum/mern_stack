const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  console.log('This is the server talking!');
  res.json({
    name: 'Brendan',
    message: 'This is an object',
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
