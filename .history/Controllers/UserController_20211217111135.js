const HttpError = require("../Models/http-error");
const { v4: uuidv4 } = require("uuid");

let userData = [
  {
    name: "Saud ul Hassan",
    email: "saudchaudhary0@gmail.com",
    phone: "+92 302 2321 605",
    password: "Saud.1234",
  },
];

const getAllUser = (req, res, next) => {
  const result = userData;

  if (!result) {
    return next(new HttpError("No user Found", 404));
  }
};

exports.getAllUser = getAllUser;
