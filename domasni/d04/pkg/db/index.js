const mongoose = require("mongoose");

const host = "";
const username = "";
const password = "";
const dbname = "games";

const DB = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(DB, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully connected to MongoDB");
});
