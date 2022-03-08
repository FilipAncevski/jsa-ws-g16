const fs = require("fs");

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`${file}.json`, "utf8", (err, data) => {
      if (err) return reject(err);
      let out = JSON.parse(data);
      return resolve(out);
    });
  });
};

const writeFile = (data, destination) => {
  return new Promise((resolve, reject) => {
    let out = JSON.stringify(data);
    fs.writeFile(`${destination}.json`, out, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

module.exports = {
  writeFile,
  readFile,
};
