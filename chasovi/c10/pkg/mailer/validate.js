const { Validator } = require("node-input-validator");

const Mail = {
  to: "required|string",
  subject: "required|string",
  message: "required|string",
};

const validate = async (data, schema) => {
  const v = new Validator(data, schema);
  const c = await v.check();
  if (!c) {
    throw {
      code: 404,
      error: "Missing required field",
    };
  }
};

module.exports = {
  validate,
  Mail,
};
