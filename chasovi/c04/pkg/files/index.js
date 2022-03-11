const fs = require("fs");

const readFile = (source) => {
  return new Promise((success, fail) => {
    fs.readFile(`${source}.json`, "utf8", (err, data) => {
      if (err) return fail(err);
      let out = JSON.parse(data);
      return success(out);
    });
  });
};

const writeFile = (data, destination) => {
  return new Promise((success, fail) => {
    let out = JSON.stringify(data);
    fs.writeFile(`${destination}.json`, out, (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

module.exports = {
  readFile,
  writeFile,
};
