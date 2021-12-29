const express = require("express");
const bodyParser = require("body-parser");
const BirdsRouter = require("./Routers/BirdsRouter");

const app = express();

app.use(bodyParser.json());

app.use("/birds");

app.listen(5000);
