const { Router } = require('express');
const userController = require('../controllers/user-controller');
const userRouter = new Router();
// const { requireAdmin } = require("../middleware/require-admin");
const { requireLogin } = require('../middleware/require-login');

userRouter.get('/', requireLogin, userController.getAllUsers);
userRouter.post('/login', requireLogin, userController.login);
userRouter.post('/signup', requireLogin, userController.signup);

module.exports = { userRouter };
