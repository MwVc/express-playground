const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();
const authorRouter = require("./routes/authorRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("This is my homepage");
});

app.use("/authors", authorRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
