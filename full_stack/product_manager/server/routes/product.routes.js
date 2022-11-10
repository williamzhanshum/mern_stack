// import the controller to use the instantiated model

const ProductController = require('../controllers/product.controller');

// We need to export these, so that we can call these functions in the server.js file.
module.exports = (app) => {
  app.get('/api/products', ProductController.getAllProducts);
  app.get('/api/products/:id', ProductController.getOneProduct);
  app.post('/api/products', ProductController.createProduct);
  app.put('/api/products/:id', ProductController.updateProduct);
  app.delete('/api/products/:id', ProductController.deleteProduct);
};
