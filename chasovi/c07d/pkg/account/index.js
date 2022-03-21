const mongoose = require("mongoose");

const Account = mongoose.model(
  "homework_accounts",
  {
    email: String,
    full_name: String,
    password: String,
  },
  "homework_accounts"
);

const create = async (acc) => {
  const newAcc = new Account(acc);
  return await newAcc.save();
};

const getByEmail = async (email) => {
  return await Account.findOne({ email });
};

module.exports = {
  create,
  getByEmail,
};
