// -- CONTROLLER --
// Responsible for making queries to the DB, using the model.
// So we have to import the model.

const Product = require('../models/product.model');

// We need to export these functions, so that we can use them in the routes file.

// CREATE
module.exports.createProduct = (req, res) => {
  // console.log('req.body =', req.body);
  Product.create(req.body)
    .then((newProduct) => res.json({ product: newProduct }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};
