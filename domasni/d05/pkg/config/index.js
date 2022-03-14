const fs = require("fs");
const CONFIG_SOURCE = `${__dirname}/../../config.json`;

let config = null;

if (config === null) {
  let source = fs.readFileSync(CONFIG_SOURCE);
  config = JSON.parse(source);
}

const get = (section) => {
  if (!config[section]) throw `Configuration ${section} could not found`;
  return config[section];
};

module.exports = {
  get,
};
