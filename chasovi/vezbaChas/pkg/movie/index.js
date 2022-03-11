const mongoose = require("mongoose");

const Movie = mongoose.model(
  "movies",
  {
    name: String,
    premiere: Date,
    genre: String,
    actors: [String],
    awards: [String],
    director: String,
  },
  "movies"
);

const getAll = async () => {
  return await Movie.find();
};
const getOneMovie = async (id) => {
  return await Movie.findOne({ _id: id });
};

const addMovie = async (movie) => {
  let m = new Movie(movie);
  return await m.save();
};

const updateMovie = async (id, movie) => {
  return await Movie.findByIdAndUpdate(id, movie);
};

const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete({ _id: id });
};

module.exports = {
  getAll,
  getOneMovie,
  addMovie,
  updateMovie,
  deleteMovie,
};
