const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

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

mongoose
  .connect()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log("Error ", err);
  });
app.listen(5000);
