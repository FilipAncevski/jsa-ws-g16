const mongoose = require("mongoose");
const config = require("../config");

// const host = config.get("db").host;
// const username = config.get("db").username;
// const password = config.get("db").password;
// const dbname = config.get("db").dbname;

const DB = `mongodb+srv://${config.get("db").username}:${
  config.get("db").password
}@${config.get("db").host}/${
  config.get("db").dbname
}?retryWrites=true&w=majority`;

mongoose.connect(DB, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully connected to MongoDB");
});
