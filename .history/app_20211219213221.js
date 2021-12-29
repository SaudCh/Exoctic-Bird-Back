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

//mongodb+srv://test:Test.1234@cluster0.l7gmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose
  .connect("mongodb://localhost:27017/exoticbirds")
  .then(() => {
    console.log("Connected");
    app.listen(5000);
  })
  .catch((err) => {
    console.log("Error ", err);
  });
