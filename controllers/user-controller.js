const jwt = require("jsonwebtoken");
const userDal = require("../dal/user-dal");
const bcrypt = require("bcrypt");

async function hashPassword(plainPassword) {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    return hashedPassword;
  } catch (err) {
    res.status(500).send(err);
  }
}

function validateUserData(user) {
  try {
    if (!user.password || !user.email || !user.userName) {
      return "Some fields are missing";
    }

    if (user.password !== user.passwordRepeat) {
      return "Passwords do not match";
    }
    if (user.password.length < 6) {
      return "Passwords too short, minimum 6 chars";
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

async function updateUser(req, res) {
  try {
    const updatedUserData = req.body;
    const userId = req.params.userId;

    const validationErrorMessage = validateUserData(updatedUserData);
    if (validationErrorMessage) {
      return res.status(400).send({ message: validationErrorMessage });
    }

    if (updatedUserData.email !== req.user.email) {
      const emailAlreadyExist = await userDal.getUserByEmail(
        updatedUserData.email
      );
      if (emailAlreadyExist) {
        return res
          .status(400)
          .send({ message: "New email address already used" });
      }
    }

    const hashedPassword = await hashPassword(updatedUserData.password);
    const updatedUser = await userDal.updateUser(userId, {
      ...updatedUserData,
      password: hashedPassword,
      isAdmin: req.user.isAdmin,
    });
    res.json(updatedUser);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
}

async function signup(req, res) {
  try {
    const user = req.body;

    const validationErrorMessage = validateUserData(user);
    if (validationErrorMessage) {
      return res.status(400).send({ message: validationErrorMessage });
    }

    const isUserExist = await userDal.getUserByEmail(user.email);
    if (isUserExist) {
      return res.status(400).send({ message: "Email already exist" });
    }

    const hashedPassword = await hashPassword(user.password);
    const newUser = await userDal.createUser({
      email: user.email,
      password: hashedPassword,
      userName: user.userName,
    });
    res.json(newUser);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
}

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!password || !email) {
      return res.status(400).send({ message: "Some fields are missing" });
    }
    const user = await userDal.getUserByEmail(email);
    if (!user) {
      return response
        .status(400)
        .send({ message: "Invalid Email or Password" });
    }
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return response
        .status(400)
        .send({ message: "Invalid Email or Password" });
    }
    const userData = {
      _id: user._id,
      email: user.email,
      userName: user.userName,
      isAdmin: user.isAdmin,
    };

    const token = jwt.sign(userData, process.env.JWT, { expiresIn: "2 days" });
    const twoDays = 2 * 24 * 60 * 60 * 1000;
    response.cookie("jwt", token, { secure: true, maxAge: twoDays });

    response.json(userData);
  } catch (err) {
    res.status(500).send(err);
  }
};

async function getAllUsers(req, res) {
  try {
    const users = await userDal.getUsers();
    res.json({ users });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getUserById(req, res) {
  const { userId } = req.params;
  try {
    const user = await userDal.getUserById(userId);
    res.json({
      user: { ...user.toObject(), ownedPets: await getPetsByUserId(user._id) },
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

// TODO: need to check that this works
const logout = async (req, res) => {
  try {
    res.clearCookie("access-token");
    console.log("cookies-removed");
  } catch (err) {
    console.log(err);
  }
};

const addScore = async (req, res) => {
  const { userName, score } = req.body;
  try {
    const res = addScoreModel(userName, score);

    res.send("ScoreAdd");
  } catch (err) {
    console.log(err);
  }
};

const getAllScores = async (req, res) => {
  try {
    const res = getAllScoresModel(userName);
    res.send("AllScores");
  } catch (err) {
    console.log(err);
  }
};

const getAllUserScores = async (req, res) => {
  try {
    const res = getAllUserScoresModel();
    res.send("AllUserScores");
  } catch (err) {
    console.log(err);
  }
};

const getUserLastScore = async (req, res) => {
  try {
    const res = getUserHighScoreModel(userName);
    res.send("userLastScore");
  } catch (err) {
    console.log(err);
  }
};

const getUserHighScore = async (req, res) => {
  try {
    const res = getUserHighScoreModel(userName);
    res.send("userHighScore");
  } catch (err) {
    console.log(err);
  }
};

const userController = {
  signup,
  login,
  getAllUsers,
  logout,
  getUserById,
  updateUser,
  addScore,
  getUserHighScore,
  getUserLastScore,
  getAllUserScores,
  getAllScores,
};

module.exports = userController;
