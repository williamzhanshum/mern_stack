// import mongoose to build the model
const mongoose = require('mongoose');

// the schema - the rules that the entries in the DB must follow
// What do we want our instances to look like?
const NinjaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Must have a {PATH}.'], // {PATH} will look at the key and put it there.
      minlength: [3, '{PATH} must have at least 3 charachters.'],
    },
    numberOfBelts: {
      type: Number,
      required: [true, 'Must give a belt'],
    },
    isGraduating: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// the model - this is what we use to make the actual queries to the DB.
const Ninja = mongoose.model('Ninja', NinjaSchema); // returns a model

// export the model, which will be used in the CONTROLLER file
module.exports = Ninja;
