const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [2, 'Title must be at least 2 characters long.'],
  },
  price: {
    type: Number,
    required: [true, 'Must include a price.'],
  },
  description: { type: String },
});

// the model - this is what we use to make the actual queries to the DB.
const Product = mongoose.model('Prdouct', ProductSchema);

// export the model, which will be used in the CONTROLLER file
module.exports = Product;
