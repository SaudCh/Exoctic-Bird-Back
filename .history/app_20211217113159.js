const express = require("express");
const bodyParser = require("body-parser");

const HttpError = require("./Models/http-error");
const BirdsRouter = require("./Routers/BirdsRouter");
const UserRouter = require("./Routers/userRouter");

const app = express();

app.use(bodyParser.json());

app.use("/birds", BirdsRouter);
app.use("/user", UserRouter);

app.use((req, res, next) => {
  next(new HttpError("Page not Found"), 404);
});

app.listen(5000);
