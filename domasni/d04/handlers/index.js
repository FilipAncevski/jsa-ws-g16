const {
  addGame,
  removeGame,
  updateGame,
  viewAllGames,
  viewSingelGames,
} = require("../pkg/game");

const postGame = async (req, res) => {
  try {
    const g = await addGame(req.body);
    return res.status(201).send(g);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const deleteGame = async (req, res) => {
  try {
    await removeGame(req.params.id);
    return res.status(204).send("Game deleted successfully");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const putGame = async (req, res) => {
  try {
    await updateGame(req.params.id, req.body);
    return res.status(200).send("Game updated successfully");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const patchGame = async (req, res) => {
  try {
    await updateGame(req.params.id, req.body);
    return res.status(200).send("Game patched successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

const getAllGames = async (req, res) => {
  try {
    const g = await viewAllGames();
    return res.status(200).send(g);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const getGameID = async (req, res) => {
  try {
    const g = await viewSingelGames(req.params.id);
    return res.status(200).send(g);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllGames,
  getGameID,
  patchGame,
  putGame,
  deleteGame,
  postGame,
};
