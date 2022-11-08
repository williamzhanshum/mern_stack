// In this file we will house all of the logic for creating, retrieving, updating and deleting
const Joke = require('../models/jokes.model');

// Get ALL
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json(err));
};

// Get ONE
module.exports.findOneJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneJoke) => res.json({ joke: oneJoke }))
    .catch((err) => res.json(err));
};

// CREATE
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => res.json({ user: newlyCreatedJoke }))
    .catch((err) => res.json(err));
};

// UPDATE
module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => res.json({ user: updatedJoke }))
    .catch((err) => res.json(err));
};

// DELTE ONE
module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json(err));
};
