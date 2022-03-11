const mongoose = require("mongoose");

const Game = mongoose.model(
  "games",
  {
    name: String,
    releaseDate: Date,
    developer: String,
    designer: [String],
    platforms: [String],
    gameTypes: [String],
  },
  "games"
);

const addGame = async (game) => {
  const newGame = new Game(game);
  return await newGame.save();
};

const viewAllGames = async () => {
  return await Game.find();
};

const viewSingelGames = async (id) => {
  return await Game.findById({ _id: id });
};

const updateGame = async (id, game) => {
  return await Game.findByIdAndUpdate(id, game);
};

const removeGame = async (id) => {
  return await Game.findByIdAndDelete({ _id: id });
};

module.exports = {
  viewAllGames,
  viewSingelGames,
  updateGame,
  removeGame,
  addGame,
};
