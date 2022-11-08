const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express(); // Invoking express()
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

const createCompany = () => {
  return {
    companyId: faker.datatype.uuid(),
    companyName: faker.company.name(),
    address: faker.address.streetAddress(),
  };
};

const newUser = createUser();
const newCompany = createCompany();

// User Route
app.get('/api/users/new', (req, res) => {
  res.json(newUser);
});

// Company Route
app.get('/api/companies/new', (req, res) => {
  res.json(newCompany);
});

// Return both new user and company:
app.get('/api/user/company', (req, res) => {
  res.json({
    user: newUser,
    company: newCompany,
  });
});

// This .listen() should always be at the end of our prpgram
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
