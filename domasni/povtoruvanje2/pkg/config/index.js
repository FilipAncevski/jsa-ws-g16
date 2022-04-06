const fs = require("fs");

const path = `${__dirname}/../../config.json`;

let config = null;

const get = (section) => {
  if (config === null) {
    let data = fs.readFileSync(path);
    config = JSON.parse(data);
  }
  if (config[section] === undefined) {
    throw `${section} is not defined`;
  }
  return config[section];
};

module.exports = {
  get,
};
