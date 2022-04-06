const mongoose = require("mongoose");
const { get } = require("../config");

const username = get("db").username;
const password = get("db").password;
const host = get("db").host;
const dbname = get("db").dbname;

const DB = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(DB, (err) => {
  if (err) throw err;
  console.log("MongoDB connected");
});
