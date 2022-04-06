const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  {
    username: String,
    password: String,
    email: String,
  },
  "users"
);

const get = async () => {
  try {
    return await User.find({});
  } catch (error) {
    throw error;
  }
};

const getByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw error;
  }
};

const create = async (user) => {
  try {
    const korisnik = new User(user);
    return await korisnik.save();
  } catch (error) {
    throw error;
  }
};

const update = async (id, user) => {
  try {
    await User.findByIdAndUpdate({ _id: id }, user);
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  try {
    await User.findByIdAndDelete({ _id: id });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  remove,
  update,
  create,
  get,
  getByEmail,
};
