const { Router } = require('express');
const scoreController = require('../controllers/score-controller');
const scoreRouter = Router();
// const { requireAdmin } = require("../middleware/require-admin");
const { requireLogin } = require('../middleware/require-login');

// Scores:
scoreRouter.post('/', scoreController.addScore);
scoreRouter.get('/scores', requireLogin, scoreController.getAllScores);
scoreRouter.get('/scores/:userName', requireLogin, scoreController.getAllUserScores);
scoreRouter.get('/scores/last/:userName', requireLogin, scoreController.getUserLastScore);
scoreRouter.get('/scores/high/:userName', requireLogin, scoreController.getUserHighScore);

module.exports = { scoreRouter };
