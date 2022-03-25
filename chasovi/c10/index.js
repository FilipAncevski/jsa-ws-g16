const express = require("express");
const { get } = require("./pkg/config");
const { send } = require("./handlers/mailer");

const app = express();

app.use(express.json());

app.post("/api/v1/sendmail", send);

app.listen(get("service").port, (err) => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${get("service").port}`);
});
