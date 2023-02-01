const { Router } = require('express');
const scoreController = require('../controllers/score-controller');
const scoreRouter = Router();
// const { requireAdmin } = require("../middleware/require-admin");
const { requireLogin } = require('../middleware/require-login');

// Scores:
scoreRouter.post('/', scoreController.addScore);
scoreRouter.get('/', requireLogin, scoreController.getAllScores);
scoreRouter.get('/top-five', scoreController.getSearchTopFiveScores);
scoreRouter.get('/:email', requireLogin, scoreController.getScoresByEmail);
scoreRouter.get('/last/:email', requireLogin, scoreController.getUserLastScore);
scoreRouter.get('/high/:email', requireLogin, scoreController.getUserHighestScore);

module.exports = { scoreRouter };
