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
    const scores = await scoreDal.getAllScores();
    // res.json -> sends response in json format
    res.json(scores);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

const getScoresByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const scoresByEmail = await scoreDal.getScoresByEmail(email);
    res.json(scoresByEmail);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

const getUserLastScore = async (req, res) => {
  try {
    const email = req.params.email;
    const lastScoreByEmail = await scoreDal.getUserLastScore(email);
    if (!lastScoreByEmail) {
      return res.send({ message: `User ${email} has no scores` });
    }
    res.json(lastScoreByEmail);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

const getUserHighestScore = async (req, res) => {
  try {
    const email = req.params.email;
    const highestScoreByEmail = await scoreDal.getUserHighestScore(email);
    if (!highestScoreByEmail) {
      return res.send({ message: `User ${email} has no scores` });
    }
    res.json(highestScoreByEmail);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

const scoreController = {
  addScore,
  getUserHighestScore,
  getUserLastScore,
  getScoresByEmail,
  getAllScores,
};

module.exports = scoreController;
