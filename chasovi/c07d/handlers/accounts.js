const { create, getByEmail } = require("../pkg/account");
const {
  accountRegister,
  accountLogin,
  validate,
} = require("../pkg/account/validate");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { get } = require("../pkg/config");

const register = async (req, res) => {
  try {
    await validate(req.body, accountRegister);

    const emailTest = await getByEmail(req.body.email);

    if (emailTest) {
      throw {
        code: 400,
        error: `${req.body.email} is taken`,
      };
    }

    req.body.password = bcrypt.hashSync(req.body.password);

    const acc = await create(req.body);
    return res.status(201).send(acc);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error");
  }
};

const login = async (req, res) => {
  try {
    await validate(req.body, accountLogin);

    const emailTest = await getByEmail(req.body.email);

    if (!emailTest) {
      throw {
        code: 404,
        error: `${email} is not a valid email`,
      };
    }

    if (!bcrypt.compareSync(req.body.password, emailTest.password)) {
      throw {
        code: 400,
        error: "Wrong password",
      };
    }

    const payload = {
      full_name: emailTest.full_name,
      email: emailTest.email,
      id: emailTest.id,
      exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60,
    };

    const token = jwt.sign(payload, get("service").jwt_key);

    return res.status(200).send(token);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const refreshToken = async (req, res) => {
  try {
    const payload = {
      ...req.user,
      exp: new Date().getTime() / 1000 + 14 * 24 * 60 * 60,
    };

    const token = jwt.sign(payload, get("service").jwt_key);

    return res.status(200).send(token);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  register,
  login,
  refreshToken,
};
