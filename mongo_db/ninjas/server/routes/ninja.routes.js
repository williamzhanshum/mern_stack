// import the controller to use the instantiated model
const NinjaController = require('../controllers/ninja.controller');
// console.log(NinjaController);

module.exports = (app) => {
  app.get('/api/ninjas', NinjaController.findAllNinjas);
  app.get('/api/ninjas/:id', NinjaController.findOneSingleNinja);
  app.post('/api/ninjas', NinjaController.createNinja);
  app.put('/api/ninjas/:id', NinjaController.updateExistingNinja);
  app.delete('/api/ninjas/:id', NinjaController.deleteAnExistingNinja);
};
