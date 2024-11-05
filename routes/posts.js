const { Router } = require("express");
const apiRouter = Router();

// posts in a database example
let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

apiRouter.get("/", (req, res) => {
  res.send(
    "<h1>You have reached the api</h1> <h3>Get <a href='api/posts'>posts.</a></h3><h3>Go <a href='/'>home.</a></h3>"
  );
});

// Get all posts
apiRouter.get("/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get single post
apiRouter.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).send("Server error: Resource not found");
  }
  res.status(200).send(post);
});

module.exports = apiRouter;
