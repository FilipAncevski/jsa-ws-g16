const mongoose = require("mongoose");

const Book = mongoose.model(
  "books",
  {
    name: String,
    published: Date,
    author: String,
    publisher: String,
    translation: [String],
    genres: [String],
  },
  "books"
);

const create = async (book) => {
  const nb = await new Book(book);
  return nb.save();
};

const seeAll = async () => {
  return await Book.find();
};

const seeOne = async (id) => {
  return await Book.findById(id);
};

const update = async (id, book) => {
  return await Book.findByIdAndUpdate(id, book);
};

const remove = async (id) => {
  return await Book.findByIdAndDelete(id);
};

module.exports = {
  create,
  seeAll,
  seeOne,
  update,
  remove,
};
