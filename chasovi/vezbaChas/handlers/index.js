const {
  getAll,
  getOneMovie,
  updateMovie,
  deleteMovie,
  addMovie,
} = require("../pkg/movie");

const getAllMovies = async (req, res) => {
  try {
    let movies = await getAll();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};

const getOne = async (req, res) => {
  try {
    let movie = await getOneMovie(req.params.id);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};

const createMovie = async (req, res) => {
  try {
    let m = await addMovie(req.body);
    return res.status(201).json(m);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

const update = async (req, res) => {
  try {
    await updateMovie(req.params.id, req.body);

    return res.status(204).json("");
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};

const updatePartially = async (req, res) => {
  try {
    await updateMovie(req.params.id, req.body);
    return res.status(204).json("");
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};

const movieDelete = async (req, res) => {
  try {
    await deleteMovie(req.params.id);
    return res.status(204).json("");
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};

module.exports = {
  movieDelete,
  update,
  updatePartially,
  getAllMovies,
  getOne,
  createMovie,
};
