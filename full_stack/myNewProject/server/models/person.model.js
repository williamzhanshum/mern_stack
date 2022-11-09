const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
  },
  { timestamp: true }
);

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
