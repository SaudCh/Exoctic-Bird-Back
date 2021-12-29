const HttpError = require("../Models/http-error");
const { v4: uuidv4 } = require("uuid");

let userData = [];

const getAllUser = (req, res, next) => {
  const result = userData;

  if (!result || result.length === 0) {
    return next(new HttpError("No user Found", 404));
  }
  res.json({ result });
};

const getUserById = (req, res, next) => {
  const { uid } = req.body;
  let result;

  result = userData.find((user) => {
    return user.id === uid;
  });

  res.json(result);
};

exports.getAllUser = getAllUser;
