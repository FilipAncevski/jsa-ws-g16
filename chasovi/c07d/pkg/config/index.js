const fs = require("fs");
const DATA_SOURCE = `${__dirname}/../../config.json`;

let config = null;

if (config === null) {
  let data = fs.readFileSync(DATA_SOURCE, "utf8");
  config = JSON.parse(data);
}

const get = (section) => {
  if (config[section] === undefined) {
    throw `${section} doesnt exist`;
  }
  return config[section];
};

module.exports = {
  get,
};
