const dbConnection = require("../knex/knex");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
app.use(cookieParser());

const {
   signUpModel,
   deleteUserModel,
   getUserByEmailModel,
   getUserByIdModel,
   updateUserModel,
} = require("../models/usersModels");

const { createToken, createAdminToken } = require("../middleware/JWT");
const { getPetsByUserModel } = require("../models/petsModels");

const signUp = async (req, res) => {
   const newUser = req.body;
   try {
      const resOk = await signUpModel(newUser);
      res.send(resOk);
   } catch (err) {
      res.status(500).send(err);
   }
};

const login = async (req, res) => {
   const { email, password } = req.body;
   const user = await getUserByEmailModel(email);
   if (!user) {
      res.status(400).send({ error: "User Doesn't Exist" });
   } else {
      bcrypt.compare(password, user.password).then((match) => {
         if (!match) {
            res.status(400).send({
               error: "Wrong Email Address and Password Combination!",
            });
         } else {
            const accessToken = createToken(user);
            res.cookie("access-token", accessToken, {
               maxAge: 604800000,
               httpOnly: true,
            });
            console.log("isAdmin:", user.isAdmin);
         if (user.isAdmin) {
              const adminAccessToken = createAdminToken(user);
              res.cookie("admin-access-token", adminAccessToken, {
                 maxAge: 86400000,
                 httpOnly: true,
              });
         }
            res.send({
               userName: user.userName,
               email: user.email,
               isLoggedIn: user.isLoggedIn
            });
         }
      });
   }
};

const logout = async (req, res) =>{
   try {
      res.clearCookie("access-token");
      console.log('cookies-removed');
   }catch(err){
      console.log(err);
   }
}

const addScore = async (req, res) => {
   try {
     //ADD MODAL

      res.send("ScoreAdd");
   } catch (err) {
      console.log(err);
   }
};

const getAllScores = async (req, res) => {

   try {
      //ADD MODAL
      res.send("AllScores");
   } catch (err) {
      console.log(err);
   }
};

const getAllUserScores = async (req, res) => {
   try {
      //ADD MODAL
      res.send("AllUserScores");
   } catch (err) {
      console.log(err);
   }
};

const getUserLastScore = async (req, res) => {
   try {
      // ADD MODAL
      res.send("userLastScore");
   } catch (err) {
      console.log(err);
   }
};

const getUserHighScore = async (req, res) => {
   try {
      //ADD MODAL
      res.send('userHighScore')
   } catch (err) {
      console.log(err);
   }
};

module.exports = {
   signUp,
   login,
   logout,
   addScore,
   getAllScores,
   getAllUserScores,
   getUserLastScore,
   getUserHighScore
};
