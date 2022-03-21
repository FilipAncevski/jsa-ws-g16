const config = require("./pkg/config");
require("./pkg/db");
const express = require("express");
const auth = require("./handlers/auth");
const jwt = require("express-jwt");

const app = express();

app.use(express.json());

app.post("/api/v1/auth/login", auth.login);
app.post("/api/v1/auth/register", auth.register);
app.get(
  "/api/v1/auth/refresh-token",
  jwt({
    secret: config.get("service").jwt_key,
    algorithms: ["HS256"],
  }),
  auth.refreshToken
);
app.post("/api/v1/auth/forgot-password", auth.forgotPassword);
app.post("/api/v1/auth/reset-password", auth.resetPassword);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  }
});

app.listen(config.get("service").port, (err) => {
  if (err) return console.log(err);
  console.log(`Server listening on ${config.get("service").port}`);
});
