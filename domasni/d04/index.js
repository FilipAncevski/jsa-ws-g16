require("./pkg/db");

const express = require("express");
const app = express();

const {
  deleteGame,
  getAllGames,
  getGameID,
  patchGame,
  postGame,
  putGame,
} = require("./handlers");
app.use(express.json());

app.get("/api/games", getAllGames);
app.get("/api/games/:id", getGameID);
app.post("/api/games", postGame);
app.put("/api/games/:id", putGame);
app.patch("/api/games/:id", patchGame);
app.delete("/api/games/:id", deleteGame);

app.listen(10000, () => {
  console.log("Server is live");
});
