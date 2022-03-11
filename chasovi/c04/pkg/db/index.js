const mongoose = require("mongoose");

const host = "myfirstdatabase.t8mul.mongodb.net";
const username = "fika";
const password = "prekukulvise12";
const dbName = "g19";

let DSN = `mongodb+srv://${username}:${password}@${host}/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(DSN, (err) => {
  if (err) {
    return console.log("Could not connect to DB:", err);
  }
  console.log("Connected to DB:");
});
