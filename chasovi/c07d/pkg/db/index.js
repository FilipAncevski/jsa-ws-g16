const mongoose = require("mongoose");
const { get } = require("../config");

const username = get("db").username;
const host = get("db").host;
const password = get("db").password;
const dbname = get("db").dbname;

const DB = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(DB, (err) => {
  if (err) return console.log(err);
  console.log("Connected to MongoDb");
});
