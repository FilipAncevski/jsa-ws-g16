const { get } = require("./pkg/config");
require("./pkg/db");
const express = require("express");
const {
  listUsers,
  listUser,
  addUser,
  editUser,
  patchUser,
  deleteUser,
} = require("./handlers");

const app = express();

app.use(express.json());

app.get("/users", listUsers);
app.get("/users/:id", listUser);
app.post("/users", addUser);
app.put("/users/:id", editUser);
// app.patch("/users/:id", patchUser);
app.delete("/users/:id", deleteUser);

app.listen(get("service").port, (err) => {
  if (err) throw err;
  console.log(`Server listening on port ${get("service").port}`);
});
