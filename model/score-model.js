const mongoose = require("mongoose");
const scoreSchema = new mongoose.Schema({});
const Score = mongoose.model("Scores", scoreSchema);
module.exports = { Score };
