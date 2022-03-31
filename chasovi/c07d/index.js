const { get } = require("./pkg/config");
require("./pkg/db");
const {
  login,
  register,
  refreshToken,
  forgotPassword,
  resetPassword,
} = require("./handlers/accounts");
const {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getOneBlog,
  updateBlog,
  updateBlogPartial,
} = require("./handlers/blogs");

const express = require("express");
const jwt = require("express-jwt");
const app = express();

app.use(express.json());
app.use(
  jwt({ secret: get("service").jwt_key, algorithms: ["HS256"] }).unless({
    path: [
      "/api/v1/accounts/register",
      "/api/v1/accounts/login",
      "/api/v1/auth/forgot-password",
      "/api/v1/auth/reset-password",
    ],
  })
);

app.post("/api/v1/accounts/register", register);
app.post("/api/v1/accounts/login", login);
app.get("/api/v1/accounts/refresh-token", refreshToken);
app.post("/api/v1/auth/forgot-password", forgotPassword);
app.post("/api/v1/auth/reset-password", resetPassword);

app.get("/api/v1/blogs", getAllBlogs);
app.get("/api/v1/blogs/:id", getOneBlog);
app.post("/api/v1/blogs", createBlog);
app.put("/api/v1/blogs/:id", updateBlog);
app.patch("/api/v1/blogs/:id", updateBlogPartial);
app.delete("/api/v1/blogs/:id", deleteBlog);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  }
});

app.listen(get("service").port, (err) => {
  if (err) throw "Couldnt start server";
  console.log(`Server is listening on port ${get("service").port}`);
});
