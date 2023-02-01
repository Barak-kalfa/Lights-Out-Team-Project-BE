const { Score } = require('../model/score-model');

async function addScore(email, score, date) {
  return Score.create({ email, score, date });
}

// const getAllScoresModel = async () => {
//   try {
//     // ADD MONGOOSE HERE:

//     return 'AllScores';
//   } catch (err) {
//     console.log(err);
//   }
// };
async function getAllScoresModel(scoresHistory) {
  const user = await User.findOne({ scoresHistory });
  return user;
}

// async function getAllUserScoresModel(userId) {
//   try {
//     // ADD MONGOOSE HERE:
//     return 'AllUserScores';
//   } catch (err) {
//     console.log(err);
//   }
// }

async function getAllUserScoresModel(userId) {
  const user = await User.findById(userId).select('-password');
  return user;
}

// async function getUserLastScoreModel(userId) {
//   try {
//     // ADD MONGOOSE HERE:
//     return 'getUserLastScore';
//   } catch (err) {
//     console.log(err);
//   }
// }
async function getUserLastScoreModel(userId) {
  const user = await User.findById(userId).select('-password');
  return user;
}

// async function getUserHighScoreModel(userId) {
//   try {
//     // ADD MONGOOSE HERE:
//     return 'getUserLastScore';
//   } catch (err) {
//     console.log(err);
//   }
// }
async function getUserHighScoreModel(userId) {
  const user = await User.findById(userId).select('-password');
  return user;
}

module.exports = {
  addScore,
  getAllScoresModel,
  getAllUserScoresModel,
  getUserLastScoreModel,
  getUserHighScoreModel,
};
