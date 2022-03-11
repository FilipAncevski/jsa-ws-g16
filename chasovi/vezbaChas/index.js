require("./pkg/db");

const express = require("express");
const {
  getAllMovies,
  getOne,
  movieDelete,
  update,
  updatePartially,
  createMovie,
} = require("./handlers");

const api = express();

api.use(express.json());

api.get("/api/movies", getAllMovies);
api.get("/api/movies/:id", getOne);
api.post("/api/movies", createMovie);
api.put("/api/movies/:id", update);
api.patch("/api/movies/:id", updatePartially);
api.delete("/api/movies/:id", movieDelete);

api.listen(10000, (err) => {
  if (err) return console.log(err);
  return console.log("Server started on port 10 000");
});
