const db = require("../data/db");
const asyncHandler = require("express-async-handler");

// async function getAuthorById(req, res) {
//   const { authorId } = req.params;

//   const author = await db.getAuthorById(Number(authorId));

//   if (!author) {
//     res.status(404).send("Author not found");
//     return;
//   }

//   res.send(`Author name: ${author.name}`);
// }

const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;
  const author = await db.getAuthorById(authorId);

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(`Author Name: ${author.name}`);
});

module.exports = { getAuthorById };
