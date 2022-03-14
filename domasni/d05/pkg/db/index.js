const mongoose = require("mongoose");
const { get } = require("../config");

mongoose.connect(get("db").MONGO_URI, (err) => {
  if (err) return console.error(err);
  console.log("Successfully connected to MongoDB");
});
