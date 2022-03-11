const mongoose = require("mongoose");

const host = "";
const username = "";
const password = "";
const dbname = "g19";

const DB = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(DB, (err) => {
  if (err) {
    return console.log(error);
  }
  console.log("Successfully connected to MongoDB");
});
