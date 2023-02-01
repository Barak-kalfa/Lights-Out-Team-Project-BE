const { Router } = require('express');
const gridController = require('../controllers/gird-controller');
const gridRouter = Router();
// const { requireAdmin } = require("../middleware/require-admin");
const { requireLogin } = require('../middleware/require-login');

// Grids:
gridRouter.post('/', gridController.addGrid);
gridRouter.post('/click', gridController.click);


module.exports = { gridRouter };
