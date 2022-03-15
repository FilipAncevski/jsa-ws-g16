const { validate, Account, AccountLogin } = require("../pkg/account/validate");
const account = require("../pkg/account");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    await validate(req.body, AccountLogin);
    let acc = await account.getByEmail(req.body.email);
    if (!acc) {
      throw {
        code: 404,
        error: "Account not found",
      };
    }
    if (!bcrypt.compareSync(req.body.password, acc.password)) {
      throw {
        code: 400,
        error: "Wrong password",
      };
    }
    return res.status(200).send(acc);
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.error);
  }
};
const register = async (req, res) => {
  try {
    await validate(req.body, Account);
    let exists = await account.getByEmail(req.body.email);
    if (exists) {
      throw {
        code: 400,
        error: "Account already exists",
      };
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    let acc = await account.create(req.body);
    return res.status(201).send(acc);
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.error);
  }
};
const refreshToken = async (req, res) => {
  return res.send("OK");
};
const forgotPassword = async (req, res) => {
  return res.send("OK");
};
const resetPassword = async (req, res) => {
  return res.send("OK");
};

module.exports = {
  login,
  register,
  refreshToken,
  forgotPassword,
  resetPassword,
};
