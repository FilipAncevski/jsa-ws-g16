const mongoose = require("mongoose");
const { get } = require("../config");

// const host = "";
// const username = "";
// const password = "";
// const dbname = "games";

const DB = `mongodb+srv://${get("db").username}:${get("db").password}@${
  get("db").host
}/${get("db").dbname}?retryWrites=true&w=majority`;

mongoose.connect(DB, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully connected to MongoDB");
});
