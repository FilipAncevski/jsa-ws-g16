const { Validator } = require("node-input-validator");

const validateBook = {
  name: "required|string",
  published: "required|string",
  author: "required|string",
  publisher: "required|string",
  translation: "required|array",
  genres: "required|array",
};

const validateBookPartial = {
  name: "string",
  published: "string",
  author: "string",
  publisher: "string",
  translation: "array",
  genres: "array",
};

const validate = async (data, schema) => {
  let v = new Validator(data, schema);
  let c = await v.check();
  if (!c) throw v.errors;
};

module.exports = {
  validateBook,
  validateBookPartial,
  validate,
};
