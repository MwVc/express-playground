const express = require("express");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 8000;
const app = express();
// app.use(cors());

// setup static folder

app.use(express.static(path.join(__dirname, "public"))); // middleware - function that runs between the incoming request and the outgoing response

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// JSON API

// posts in a database example
let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// Get all posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).send("Server error: Resource not found");
  }
  res.status(200).send(post);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
