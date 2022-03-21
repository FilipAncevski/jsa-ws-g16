const { Validator } = require("node-input-validator");

const Blog = {
  title: "required|string",
  content: "required|string",
};

const BlogPartical = {
  title: "string",
  content: "string",
};

const validate = async (data, schema) => {
  const validate = new Validator(data, schema);
  const check = await validate.check();
  if (!check) {
    throw {
      code: 400,
      error: "Missing required field",
    };
  }
};

module.exports = {
  validate,
  Blog,
  BlogPartical,
};
