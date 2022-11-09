// import the controller to use the instantiated model

const ProductController = require('../controllers/product.controller');

// We need to export these, so that we can call these functions in the server.js file.
module.exports = (app) => {
  app.post('/api/products', ProductController.createProduct);
};
