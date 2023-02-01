const mongoose = require('mongoose');

const gridSchema = new mongoose.Schema({
  player1: {
    type: String,
    required: true,
  },
  player2: {
    type: [String],
    default: [],
  },
  A1: {
    type: Boolean,
    required: true,
  },
  A2: {
    type: Boolean,
    required: true,
  },
  A3: {
    type: Boolean,
    required: true,
  },
  A4: {
    type: Boolean,
    required: true,
  },
  A5: {
    type: Boolean,
    required: true,
  },
  B1: {
    type: Boolean,
    required: true,
  },
  B2: {
    type: Boolean,
    required: true,
  },
  B3: {
    type: Boolean,
    required: true,
  },
  B4: {
    type: Boolean,
    required: true,
  },
  B5: {
    type: Boolean,
    required: true,
  },
  C1: {
    type: Boolean,
    required: true,
  },
  C2: {
    type: Boolean,
    required: true,
  },
  C3: {
    type: Boolean,
    required: true,
  },
  C4: {
    type: Boolean,
    required: true,
  },
  C5: {
    type: Boolean,
    required: true,
  },
  D1: {
    type: Boolean,
    required: true,
  },
  D2: {
    type: Boolean,
    required: true,
  },
  D3: {
    type: Boolean,
    required: true,
  },
  D4: {
    type: Boolean,
    required: true,
  },
  D5: {
    type: Boolean,
    required: true,
  },
  E1: {
    type: Boolean,
    required: true,
  },
  E2: {
    type: Boolean,
    required: true,
  },
  E3: {
    type: Boolean,
    required: true,
  },
  E4: {
    type: Boolean,
    required: true,
  },
  E5: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
const Grid = mongoose.model('grids', gridSchema);

module.exports = { Grid };
