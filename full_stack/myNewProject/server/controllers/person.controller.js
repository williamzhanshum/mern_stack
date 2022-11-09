const Person = require('../models/person.model');

module.exports.index = (req, res) => {
  res.json({
    message: 'Hello World!',
  });
};

module.exports.createPerson = (req, res) => {
  // console.log('req.body =', req.body);
  Person.create(req.body)
    .then((newPerson) => res.json({ person: newPerson }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};
