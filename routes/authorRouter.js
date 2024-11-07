const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");

const authorRouter = Router();

authorRouter.get("/", (req, res) => {
  res.send("These are all the authors");
});

authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;
