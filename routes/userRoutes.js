const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

// router.get('/model', laptopController.getModel);
// router.get('/db', laptopController.getDB);
router.get('/', userController.findUser);
router.post('/', userController.addUser);
router.put('/:id', userController.changeUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
