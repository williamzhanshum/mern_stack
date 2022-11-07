const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 8000;

const createUser = () => {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

const createAddress = () => {};

const newuser = createUser();

app.get('/api/users/new', (req, res) => {
  res.send('Hello there');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
