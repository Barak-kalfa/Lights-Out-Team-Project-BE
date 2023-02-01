const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
const Score = mongoose.model('scores', scoreSchema);

module.exports = { Score };
