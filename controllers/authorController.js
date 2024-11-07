const db = require("../data/db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(parseInt(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author Not Found");
  }

  res.send(`Author Name: ${author.name}`);
});

module.exports = { getAuthorById };
