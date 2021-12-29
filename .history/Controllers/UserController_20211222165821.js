const HttpError = require("../Models/http-error");
const userSchema = require("../Models/userSchema");

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await userSchema.find();
  } catch (err) {
    return next(new HttpError("Fetching User Failed", 500));
  }
  res.json({ users: users });
};

const getUserById = async (req, res, next) => {
  //const { uid } = req.body;
  const uid = req.params.uid;
  let result;

  try {
    result = await userSchema.findById(uid);
  } catch (err) {
    const error = new HttpError("Could not find a Bird for that id", 500); // for Sync function
    return next(error);
  }

  if (!result) {
    return next(new HttpError("No User Found", 404));
  }

  res.json(result);
};

const addUser = async (req, res, next) => {
  const { name, email, phone, password } = req.body;

  let exsitingUser;
  try {
    exsitingUser = await userSchema.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Sign up Failed Please try again later", 500); // for Sync function
    return next(error);
  }

  if (exsitingUser) {
    const error = new HttpError("Email Already exist", 422); // for Sync function
    return next(error);
  }

  const newUser = new userSchema({
    name,
    email,
    phone,
    password,
  });

  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError("Failed", 500);
    return next(error);
  }

  res.status(201).json({ user: newUser.toObject({ getters: true }) });
  //res.status(201).json({ user: newUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let exsitingUser;
  try {
    exsitingUser = await userSchema.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Sign up Failed Please try again later", 500); // for Sync function
    return next(error);
  }

  if (!exsitingUser || exsitingUser.password !== password) {
    const error = new HttpError(
      "Invalid credential, could not log you in.",
      401
    ); // for Sync function
    return next(error);
  }

  res.json({
    message: "Logged in!.",
    user: exsitingUser.toObject({ getters: true }),
  });
};

const updatePassword = async (req, res, next) => {
  const uid = req.params.uid;
  let result;

  try {
    //Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options, callback)

    result = await userSchema.findByIdAndUpdate(uid, { password: 'hello' });
  } catch (err) {
    const error = new HttpError("Could not find a Bird for that id", 500);
    return next(error);
  }

  if (!result) {
    return next(new HttpError("No User Found", 404));
  }

  res.json(result);
}

exports.updatePassword = updatePassword
exports.getAllUser = getAllUser;
exports.getUserById = getUserById;
exports.addUser = addUser;
exports.login = login;
