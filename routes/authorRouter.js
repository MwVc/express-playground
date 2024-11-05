const { Router } = require("express");

const authorRouter = Router();

authorRouter.get("/", (req, res) => {
  res.send("All author");
});

authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`AuthorId: ${authorId}`);
});

module.exports = authorRouter;
