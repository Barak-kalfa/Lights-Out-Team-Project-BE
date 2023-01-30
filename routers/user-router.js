const { Router } = require("express");
const userRouter = new Router();
const userController = require("../controller/user-controller");
const { requireAdmin } = require("../middleware/require-admin");
const { requireLogin } = require("../middleware/require-login");

userRouter.get("/", [requireLogin, requireAdmin], userController.getAllUsers);
userRouter.put("/:userId", requireLogin);
userRouter.post("/login", userController.login);
userRouter.post("/signup", userController.signup);

userRouter.post("/scores");
userRouter.get("/scores");
module.exports = { userRouter };
