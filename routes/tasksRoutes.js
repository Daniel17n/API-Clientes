const { Router } = require('express');
const tasksController = require('../controllers/userController');

const tasksRouter = Router();

// router.get('/model', laptopController.getModel);
// router.get('/db', laptopController.getDB);
tasksRouter.get('/', tasksController.findUser);
tasksRouter.post('/', tasksController.addUser);
tasksRouter.put('/:id', tasksController.changeUser);
tasksRouter.delete('/:id', tasksController.deleteUser);

module.exports = tasksRouter;
