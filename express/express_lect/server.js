const faker = require('@faker-js/faker');
const express = require('express');
const Fake = require('./classes/Fake');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  // console.log('This is the server talking!');
  res.json(new Fake());
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
