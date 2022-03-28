const { get } = require("./pkg/config");
const express = require("express");
const { price, description, list } = require("./handlers");

const app = express();

app.use(express.json());

app.get("/api/v1/crypto/coins", list);
app.get("/api/v1/crypto/price/:coin", price);
app.get("/api/v1/crypto/description/:coin", description);

app.listen(get("service").port, (err) => {
  if (err) return console.error(err);
  return console.log(`Server is listening on port ${get("service").port}`);
});
