const { Router } = require('express');
const userController = require('../controllers/user-controller');
const userRouter = new Router();
// const { requireAdmin } = require("../middleware/require-admin");
const { requireLogin } = require('../middleware/require-login');

userRouter.get('/', userController.getAllUsers);
// userRouter.put('/:userId', requireLogin, userController.getUserById);
userRouter.post('/login', userController.login);
userRouter.post('/signup', userController.signup);
userRouter.get('/logout', userController.logout);

// Scores:
userRouter.post('/scores', userController.addScore);
userRouter.get('/scores', requireLogin, userController.getAllScores);
userRouter.get('/scores/:userName', requireLogin, userController.getAllUserScores);
userRouter.get('/scores/last/:userName', requireLogin, userController.getUserLastScore);
userRouter.get('/scores/high/:userName', requireLogin, userController.getUserHighScore);

module.exports = { userRouter };
