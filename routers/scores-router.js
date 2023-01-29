const { Router } = require("express");

const scoresRouter = new Router();

scoresRouter.post("/scores");
scoresRouter.get("/scores");
module.exports = { scoresRouter };
