const scoreDal = require('../dal/score-dal');

const addScore = async (req, res) => {
  try {
    const { email, score, date } = req.body;
    const newScore = await scoreDal.addScore(email, score, date);
    res.json(newScore);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

const getAllScores = async (req, res) => {
  try {
    const res = scoreDal.getAllScoresModel(userName);
    res.send('AllScores');
  } catch (err) {
    console.log(err);
  }
};

const getAllUserScores = async (req, res) => {
  try {
    const res = scoreDal.getAllUserScoresModel();
    res.send('AllUserScores');
  } catch (err) {
    console.log(err);
  }
};

const getUserLastScore = async (req, res) => {
  try {
    const res = getUserHighScoreModel(userName);
    res.send('userLastScore');
  } catch (err) {
    console.log(err);
  }
};

const getUserHighScore = async (req, res) => {
  try {
    const res = scoreDal.getUserHighScoreModel(userName);
    res.send('userHighScore');
  } catch (err) {
    console.log(err);
  }
};

const scoreController = {
  addScore,
  getUserHighScore,
  getUserLastScore,
  getAllUserScores,
  getAllScores,
};

module.exports = scoreController;
