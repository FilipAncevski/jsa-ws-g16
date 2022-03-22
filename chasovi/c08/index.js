const { get } = require("./pkg/config");
const express = require("express");
const fileUpload = require("express-fileupload");
const jwt = require("express-jwt");
const {
  download,
  listImages,
  remove,
  upload,
  listUsers,
} = require("./handlers");

const app = express();

app.use(
  jwt({
    algorithms: ["HS256"],
    secret: get("service").jwt_key,
  })
);
app.use(fileUpload());

app.post("/api/v1/storage", upload);
app.get("/api/v1/storage", listImages);
app.get("/api/v1/storage/users", listUsers);
app.get("/api/v1/storage/:filename", download);
app.delete("/api/v1/storage/:filename", remove);

app.listen(get("service").port, (err) => {
  if (err) return console.error(err);
  console.log(`Server listening on ${get("service").port}`);
});
