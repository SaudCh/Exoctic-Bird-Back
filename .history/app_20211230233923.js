const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path')

const HttpError = require("./Models/http-error");
const BirdsRouter = require("./Routers/BirdsRouter");
const UserRouter = require("./Routers/userRouter");

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.get("/", (req, res, next) => {
  res.send("Hello World")
})
app.use("/birds", BirdsRouter);
app.use("/user", UserRouter);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  return next(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

// const url = "mongodb://localhost:27017/exoticbirds"
const url = "mongodb+srv://test:Test.1234@cluster0.l7gmh.mongodb.net/finals?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected");
    app.listen(5000);
  })
  .catch((err) => {
    console.log("Error ", err);
  });
