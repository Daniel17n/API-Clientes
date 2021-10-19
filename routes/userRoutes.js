const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

// router.get('/model', laptopController.getModel);
// router.get('/db', laptopController.getDB);
userRouter.get('/', userController.findUser);
userRouter.post('/', userController.addUser);
userRouter.put('/:id', userController.changeUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
