const express = require("express");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 8000;
const app = express();
const posts = require("./routes/posts");
// app.use(cors());

// setup static folder

app.use(express.static(path.join(__dirname, "public"))); // middleware - function that runs between the incoming request and the outgoing response

// Routes

// JSON API

app.listen(port, () => console.log(`Server is running on port ${port}`));
