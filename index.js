const { log } = require("console");
const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const apiRouter = require("./routes/posts");

function myMiddleWare(req, res, next) {
  log("Middleware function is called");

  req.customProperty = "Hello from middleware";

  next();
}

app.use(myMiddleWare);
app.use("/", indexRouter);
app.use("/books", bookRouter);
app.use("/author", authorRouter);
app.use("/api", apiRouter);

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
