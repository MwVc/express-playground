const express = require("express");
const app = express();

const userRouter = require("./routes/userRouter");

app.get("/", (req, res) => {
  res.send("This is the app");
});

app.use("/users", userRouter);

app.listen(5000, () => {
  console.log("Server started at port:5000");
});
