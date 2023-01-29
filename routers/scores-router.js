const { Router } = require("express");

const scoresRouter = new Router();

scoresRouter.post("/scores");

module.exports = { scoresRouter };
