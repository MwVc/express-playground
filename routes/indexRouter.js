const { Router } = require("express");
const path = require("path");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  console.log(req.customProperty);
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

indexRouter.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
});

module.exports = indexRouter;
