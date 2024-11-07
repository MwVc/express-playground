const { Router } = require("express");
const { getUser } = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("These are all the users");
});

userRouter.get("/:id", getUser);

module.exports = userRouter;
