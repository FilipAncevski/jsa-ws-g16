const { Validator } = require("node-input-validator");

const accountRegister = {
  email: "required|string",
  full_name: "required|string",
  password: "required|string",
};

const accountLogin = {
  email: "required|string",
  password: "required|string",
};

const validate = async (data, schema) => {
  const v = new Validator(data, schema);
  const c = await v.check();
  if (!c) {
    throw {
      code: 400,
      error: v.errors,
    };
  }
};

module.exports = {
  validate,
  accountRegister,
  accountLogin,
};
