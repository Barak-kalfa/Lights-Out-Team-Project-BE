const { User } = require('../model/user-model');

async function createUser(user) {
  await User.create(user);
  return User.findOne({ email: user.email }).select('-password');
}

async function getUserByEmail(email) {
  const user = await User.findOne({ email });
  return user;
}

async function getUserById(userId) {
  const user = await User.findById(userId).select('-password');
  return user;
}

function getUsers(filter = {}) {
  return User.find(filter).select('-password');
}

////////////////////////////////////////////////////////////////
// Scores
// const addScoreModel = async (score) => {
//   try {
//     // ADD MONGOOSE

//     return 'ScoreAddedCondition';
//   } catch (err) {
//     console.log(err);
//   }
// };
// function addScoreToUser(petId, userId) {
//   return User.findByIdAndUpdate(
//     userId,
//     { $push: { scoresHistory: petId } },
//     { returnDocument: 'after' }
//   );
// }

const getAllScoresModel = async () => {
  try {
    // ADD MONGOOSE HERE:

    return 'AllScores';
  } catch (err) {
    console.log(err);
  }
};

async function getAllUserScoresModel(userId) {
  try {
    // ADD MONGOOSE HERE:
    return 'AllUserScores';
  } catch (err) {
    console.log(err);
  }
}

async function getUserLastScoreModel(userId) {
  try {
    // ADD MONGOOSE HERE:
    return 'getUserLastScore';
  } catch (err) {
    console.log(err);
  }
}

async function getUserHighScoreModel(userId) {
  try {
    // ADD MONGOOSE HERE:
    return 'getUserLastScore';
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
  getUserById,
  // addScoreModel,
  // addScoreToUser,
  getAllScoresModel,
  getAllUserScoresModel,
  getUserLastScoreModel,
  getUserHighScoreModel,
};
