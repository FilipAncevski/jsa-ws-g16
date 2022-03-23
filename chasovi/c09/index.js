const { get } = require("./pkg/config");
const express = require("express");
const { getForCity } = require("./handlers");

const app = express();

app.get("/api/v1/weather/:city", getForCity);

app.listen(get("service").port, (err) => {
  if (err) return console.log("Server couldnt connect");
  console.log(`Server is listening on port ${get("service").port}`);
});
