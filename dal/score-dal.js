const { Score } = require('../model/score-model');

async function addScore(email, score, date) {
  return Score.create({ email, score, date });
}

async function getAllScores() {
  return Score.find();
}

async function getScoresByEmail(email) {
  return Score.find({ email });
}

async function getUserLastScore(email) {
  const [result] = await Score.find({ email }).sort({ date: -1 }).limit(1);
  return result;
}

async function getUserHighestScore(email) {
  const [result] = await Score.find({ email }).sort({ score: -1 }).limit(1);
  return result;
}

module.exports = {
  addScore,
  getAllScores,
  getScoresByEmail,
  getUserLastScore,
  getUserHighestScore,
};
