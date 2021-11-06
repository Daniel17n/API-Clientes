const { Router } = require('express');
const orgController = require('../controllers/orgController');

const orgRouter = Router();

orgRouter.get('/', orgController.findOrg);
orgRouter.post('/', orgController.addOrg);
orgRouter.put('/:id', orgController.updateOrg);
orgRouter.delete('/:id', orgController.deleteOrg);
orgRouter.get('/tasks', orgController.shareTasks);

module.exports = orgRouter;
