const { Router } = require("express");
const userController = require("../controller/user-controller");
const userRouter = new Router();
// const { requireAdmin } = require("../middleware/require-admin");
// const { requireLogin } = require("../middleware/require-login");

userRouter.get("/", userController.getAllUsers);
// userRouter.put("/:userId", requireLogin);
userRouter.post("/login", userController.login);
userRouter.post("/signup", userController.signup);

// userRouter.post("/scores");
// userRouter.get("/scores");

module.exports = { userRouter };
