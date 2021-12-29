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
    const error = new HttpError("Could not find a User for that id", 500); // for Sync function
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
  const { password } = req.body;
  let result;

  try {
    result = await userSchema.findByIdAndUpdate(uid, { password: password });
  } catch (err) {
    const error = new HttpError("Could not find a User for that id", 500);
    return next(error);
  }

  if (!result) {
    return next(new HttpError("No User Found", 404));
  }

  res.json({ message: "Password Updated SuccessFully" });
}

const updateInfo = async (req, res, next) => {
  const uid = req.params.uid;
  const { gender, uName, email, phone, username, } = req.body;
  let result;

  try {
    result = await userSchema.findByIdAndUpdate(uid, {
      gender: gender,
      name: uName,
      email: email,
      phone: phone,
      username: username,
    });
  } catch (err) {
    const error = new HttpError("Could not find a User for that id", 500);
    return next(error);
  }

  if (!result) {
    return next(new HttpError("No User Found", 404));
  }

  res.json({ message: "User Info Updated Successfully" });
}

const deleteUser = async (req, res, next) => {
  const uid = req.params.uid;
  let user;
  //console.log(uid)

  try {
    user = await userSchema.findByIdAndDelete(uid);
  } catch (err) {
    const error = new HttpError("Failed", 500);
    return next(error);
  }

  if (!user) {
    return next(new HttpError("No User Found for that id", 404));
  }

  res.status(200).json({ message: "User Deleted" });
}

exports.updatePassword = updatePassword;
exports.getAllUser = getAllUser;
exports.getUserById = getUserById;
exports.addUser = addUser;
exports.login = login;
exports.updateInfo = updateInfo
exports.deleteUser = deleteUser
