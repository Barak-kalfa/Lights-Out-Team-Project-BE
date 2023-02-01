const { Router } = require('express');
const scoreController = require('../controllers/score-controller');
const scoreRouter = Router();
// const { requireAdmin } = require("../middleware/require-admin");
const { requireLogin } = require('../middleware/require-login');

// Scores:
scoreRouter.post('/', scoreController.addScore);
scoreRouter.get('/', requireLogin, scoreController.getAllScores); // TODO: should be protected route (requireLogin)
scoreRouter.get('/:email', requireLogin, scoreController.getScoresByEmail); // TODO: should be protected route (requireLogin)
scoreRouter.get('/last/:email', requireLogin, scoreController.getUserLastScore); // TODO: should be protected route (requireLogin)
scoreRouter.get('/high/:email', requireLogin, scoreController.getUserHighestScore); // TODO: should be protected route (requireLogin)
scoreRouter.get('/top-five/:email', requireLogin, scoreController.getTopFiveScores);
module.exports = { scoreRouter };
