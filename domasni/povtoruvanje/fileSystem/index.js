const { readFile, writeFile } = require("fs");

const filePath = `${__dirname}/files/data.json`;

const read = async (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) return reject(err);
      let out = JSON.parse(data);
      return resolve(out);
    });
  });
};

const write = async (destination, file) => {
  return new Promise((resolve, reject) => {
    let out = JSON.stringify(file);
    writeFile(destination, out, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

module.exports = {
  read,
  write,
};
