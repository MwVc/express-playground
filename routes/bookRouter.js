const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("All books are available here");
});

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`bookId: ${bookId}`);
});

module.exports = bookRouter;
