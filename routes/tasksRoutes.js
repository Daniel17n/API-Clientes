const { Router } = require('express');
const tasksController = require('../controllers/tasksController');

const tasksRouter = Router();

tasksRouter.get('/', tasksController.findTasks);
tasksRouter.post('/', tasksController.addTasks);
tasksRouter.put('/:id', tasksController.changeTasks);
tasksRouter.delete('/:id', tasksController.deleteTasks);

module.exports = tasksRouter;
