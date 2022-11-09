// -- CONTROLLER --
// Responsible for making queries to the DB, using the model.
// So we have to import the model.
const Ninja = require('../models/ninja.model');

// make ALL THE CRUD!!!
// All these queries are promises, so we need the then() and catch()
// We are exporting these functions to the route files, because the route will invoke these functions.

// READ ALL
module.exports.findAllNinjas = (req, res) => {
  // use the model to execute a query
  Ninja.find()
    .then((allDaNinjas) => {
      // IMPORTANT what we return here is what we will receive in REACT!
      //   res.json({ ninjas: allDaNinjas, status: 'ok' }); // Same as below, the one below is ES7 format
      res.json({ allDaNinjas }); // returns an []
    })
    .catch((err) =>
      res.jason({ message: 'something went wrong', serverError: err })
    );
};

// CREATE
module.exports.createNinja = (req, res) => {
  console.log('req.body =', req.body);
  // Same as saying: db.ninjas.insertOne({name: ..., numberOfbelts: ..., isGraduating: true})
  Ninja.create(req.body)
    .then((newlyCreatedNinja) => res.json({ ninja: newlyCreatedNinja }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

// FIND ONE
module.exports.findOneSingleNinja = (req, res) => {
  Ninja.findOne({ _id: req.params.id })
    .then((oneSingleNinja) => res.json({ ninja: oneSingleNinja }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

// UPDATE
module.exports.updateExistingNinja = (req, res) => {
  Ninja.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedNinja) => res.json({ ninja: updatedNinja }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

// DELETE
module.exports.deleteAnExistingNinja = (req, res) => {
  Ninja.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};
