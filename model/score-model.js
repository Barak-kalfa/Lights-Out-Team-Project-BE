const mongoose = require("mongoose");
const scoreSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  gameId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const Score = mongoose.model("Scores", scoreSchema);
module.exports = { Score };
