const express = require("express");
const path = require("path");
const cors = require("cors");

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

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(8080, () => console.log("Server is running on port 8080"));
