const { Validator } = require("node-input-validator");

const Game = {
  name: "require|string",
  releaseDate: "require|date",
  developer: "require|string",
  designer: "require|array",
  platforms: "require|array",
  gameTypes: "require|array",
};

const GamePartial = {
  name: "string",
  releaseDate: "date",
  developer: "string",
  designer: "array",
  platforms: "array",
  gameTypes: "array",
};

const validate = async (data, schema) => {
  const v = new Validator(data, schema);
  const c = await v.check();
  if (!c) {
    throw v.errors;
  }
};

module.exports = {
  Game,
  GamePartial,
  validate,
};
