const HttpError = require("../Models/http-error");
const { v4: uuidv4 } = require("uuid");

let userData = [
  {
    id: "u1",
    name: "Saud ul Hassan",
    email: "saudchaudhary0@gmail.com",
    phone: "+92 302 2321 605",
    password: "Saud.1234",
  },
];

const getAllUser = (req, res, next) => {
  const result = userData;

  if (!result || result.length === 0) {
    return next(new HttpError("No user Found", 404));
  }
  res.json({ result });
};

const getUserById = (req, res, next) => {
  //const { uid } = req.body;
  const uid = req.params.uid;
  let result;

  result = userData.find((user) => {
    return user.id === uid;
  });

  if (!result) {
    return next(new HttpError("No User Found", 404));
  }

  res.json(result);
};

const addUser = (req, res, next) => {
  const { name, email, phone, password } = req.body;

  const newUser = {
    id: uuidv4(),
    name: name,
    email: email,
    phone: phone,
    password: password,
  };

  userData.push(newUser);

  res.status(201).json({ user: newUser });
};

exports.getAllUser = getAllUser;
exports.getUserById = getUserById;
exports.addUser = addUser;
