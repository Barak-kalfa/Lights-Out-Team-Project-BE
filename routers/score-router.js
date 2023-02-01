const { Router } = require('express');
const scoreController = require('../controllers/score-controller');
const scoreRouter = Router();
// const { requireAdmin } = require("../middleware/require-admin");
const { requireLogin } = require('../middleware/require-login');

// Scores:
scoreRouter.post('/', scoreController.addScore);
scoreRouter.get('/', scoreController.getAllScores); // TODO: should be protected route (requireLogin)
scoreRouter.get('/:email', scoreController.getScoresByEmail); // TODO: should be protected route (requireLogin)
scoreRouter.get('/last/:email', scoreController.getUserLastScore); // TODO: should be protected route (requireLogin)
scoreRouter.get('/high/:email', scoreController.getUserHighestScore); // TODO: should be protected route (requireLogin)

module.exports = { scoreRouter };
