const mongoose = require("mongoose");

const Account = mongoose.model(
  "accounts",
  {
    email: String,
    password: String,
    full_name: String,
  },
  "accounts"
);

const create = async (acc) => {
  let c = new Account(acc);
  return await c.save();
};

const getById = async (id) => {
  return await Account.findById(id);
};

const getByEmail = async (email) => {
  return await Account.findOne({ email });
};

const getAll = async () => {
  return await Account.find({});
};

const update = async (id, acc) => {
  return await Account.updateOne({ _id: id }, acc);
};

const remove = async (id) => {
  return await Account.updateOne({ _id: id });
};

module.exports = {
  create,
  getAll,
  getByEmail,
  getById,
  update,
  remove,
};
