const express = require("express");
const bodyParser = require("body-parser");
const BirdsRouter = require("./Routers/BirdsRouter");

const app = express();

app.use(bodyParser.json());

app.use("/birds", BirdsRouter);

app.use((req, res, next) => {
  next(new HttpError("Page not Found"), 404);
});

app.listen(5000);
