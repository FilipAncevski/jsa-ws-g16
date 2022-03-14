const fs = require("fs");

const DATA_SOURCE = `${__dirname}/../../config.json`;

let config = null;

if (config === null) {
  let file = fs.readFileSync(DATA_SOURCE, "utf8");
  config = JSON.parse(file);
}

const get = (section) => {
  if (!config[section]) {
    throw `Configuration section ${section} could not be found`;
  }
  return config[section];
};

module.exports = {
  get,
};
