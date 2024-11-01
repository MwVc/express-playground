const express = require("express");
const path = require("path");

const app = express();

// setup static folder

app.use(express.static(path.join(__dirname, "public"))); // middleware - function that runs between the incoming request and the outgoing response

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.listen(8080, () => console.log("Server is running on port 8080"));
