const HttpError = require("../Models/http-error");
const { v4: uuidv4 } = require("uuid");

let userData = [];

const getAllUser = (req, res, next) => {
  const result = userData;

  if (!result) {
    return next(new HttpError("No user Found", 404));
  }
  res.json({ result });
};

exports.getAllUser = getAllUser;
