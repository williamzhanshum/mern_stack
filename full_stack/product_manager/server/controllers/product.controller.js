// -- CONTROLLER --
// Responsible for making queries to the DB, using the model.
// So we have to import the model.

const Product = require('../models/product.model');

// We need to export these functions, so that we can use them in the routes file.

// GET ALL
module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.json({ message: 'Something went wrong:', error: err }));
};

// GET ONE
module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((oneProduct) => res.json(oneProduct))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

// CREATE
module.exports.createProduct = (req, res) => {
  // console.log('req.body =', req.body);
  Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

// UPDATE
module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

// DELETE
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((deleteConfrimation) => res.json(deleteConfrimation))
    .catch((err) => console.error(err));
};
