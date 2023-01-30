const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersController");
const { validateToken } = require("../middleware/JWT");
const {
   isNewUser,
   hashPwd,
} = require("../middleware/usersMiddleware");
const { validateBody } = require("../middleware/validateBody");
const { userSchema, loginSchema } = require("../schemas/userSchemas");

router.post(
     "/signup",
     validateBody(userSchema),
     isNewUser,
     hashPwd,
     UsersController.signUp);

router.post(
     "/login",
     validateBody(loginSchema),
      UsersController.login);

router.get('/logout',
     UsersController.logout)

router.post(
   "/scores",
   validateToken,
   validateBody(),
   UsersController.addScore);

router.get(
     "/scores",
     validateToken,
     UsersController.getAllScores);

router.get(
     "/scores/:userName",
      validateToken,
       UsersController.getAllUserScores);

router.get(
   "/scores/last/:userName",
   validateToken,
   UsersController.getUserLastScore
);

router.get(
   "/scores/high/:userName",
   validateToken,
   UsersController.getUserHighScore
);

module.exports = router;
