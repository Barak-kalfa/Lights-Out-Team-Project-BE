const mongoose = require('mongoose')
const User = require('../schemas/userSchema')

async function signUpModel(newUser) {
   try {
      const user = await User.create(newUser)
      if (user) return { ok: true };
   } catch (err) {
      console.log(err);
   }
}

const getUserByEmailModel = async (email) => {
   try {
      const user = null;
      // ADD MONGOOSE HERE:
      return user;
   } catch (err) {
      console.log(err);
   }
};

const addScoreModel = async (score) => {
   try {
      // ADD MONGOOSE

      return "ScoreAddedCondition";
   } catch (err) {
      console.log(err);
   }
};

const getAllScoresModel = async () => {
   try {
      // ADD MONGOOSE HERE:

      return "AllScores";
   } catch (err) {
      console.log(err);
   }
};
   async function getAllUserScoresModel(userId) {
      try {
         // ADD MONGOOSE HERE:
         return "AllUserScores";
      } catch (err) {
         console.log(err);
      }
   };

async function getUserLastScoreModel(userId) {
   try {
      // ADD MONGOOSE HERE:
      return "getUserLastScore";
   } catch (err) {
      console.log(err);
   }
}

async function getUserHighScoreModel(userId) {
   try {
      // ADD MONGOOSE HERE:
      return "getUserLastScore";
   } catch (err) {
      console.log(err);
   }
}

module.exports = {
   signUpModel,
   getUserByEmailModel,
   addScoreModel,
   getAllScoresModel,
   getAllUserScoresModel,
   getUserLastScoreModel,
   getUserHighScoreModel
};
