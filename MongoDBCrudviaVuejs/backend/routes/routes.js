const express = require('express');
const router = express.Router();
const userController = require('../src/user/userController');

router.route('/user/getAll').get(userController.getDataControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/update/:id').patch(userController.updateUserControllerFn);
router.route('/user/delete/:id').delete(userController.deleteUserControllerFn);

module.exports = router;