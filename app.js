const express = require("express");
const app = express();
const path = require("path");
const userRouter = require("./routes/userRouter");
const assetsPath = path.join(__dirname, "public");

// Setting up App properties
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serving static assets
app.use(express.static(assetsPath));

const links = [
  { href: "https://axample.com", text: "Example Website" },
  { href: "https://fakejson.com", text: "Fake JSON" },
  { href: "https://mwvc.netlify.app", text: "Portfolio website" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { message: "This is an about page." });
});

app.use("/users", userRouter);

app.listen(5000, () => {
  console.log("Server started at port:5000");
});
