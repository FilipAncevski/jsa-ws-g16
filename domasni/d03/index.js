const express = require("express");
const app = express();
const {
  deleteExericise,
  get,
  getByIndex,
  post,
  update,
  updateParticalExercise,
  updateParticalTargetGroup,
} = require("./handlers");

app.use(express.json());

app.get("/api/exercises", get);
app.get("/api/exercises/:index", getByIndex);
app.post("/api/exercises/", post);
app.put("/api/exercises/:index", update);
app.patch("/api/exercises/exercise/:index", updateParticalExercise);
app.patch("/api/exercises/targetgroup/:index", updateParticalTargetGroup);
app.delete("/api/exercises/:index", deleteExericise);

app.listen(10000, (err) => {
  if (err) return console.log(err);
  return console.log("Server started on port 10 000");
});
