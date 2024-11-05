const { log } = require("console");
const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);
app.use("/books", bookRouter);
app.use("/author", authorRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
