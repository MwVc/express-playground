const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");

const authorRouter = Router();

authorRouter.get("/", (req, res) => {
  res.send("All author");
});

authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;
