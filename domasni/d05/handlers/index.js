const Book = require("../pkg/book");
const {
  validateBook,
  validateBookPartial,
  validate,
} = require("../pkg/book/validate");

const getBooks = async (req, res) => {
  try {
    return res.status(200).send(await Book.seeAll());
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const getBook = async (req, res) => {
  try {
    return res.status(200).send(await Book.seeOne(req.params.id));
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const postBook = async (req, res) => {
  try {
    await validate(req.body, validateBook);
    return res.status(201).send(await Book.create(req.body));
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const putBook = async (req, res) => {
  try {
    await validate(req.body, validateBook);
    await Book.update(req.params.id, req.body);
    return res.status(204).send("");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const patchBook = async (req, res) => {
  try {
    await validate(req.body, validateBookPartial);
    await Book.update(req.params.id, req.body); // Mozes vo req.body da pustis key sto ne posti i eden sto postoi. Vekje postoeckiot kje se update, noviot nisto nema da napravi, Zosto ne vadi error?
    return res.status(204).send("");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.remove(req.params.id);
    return res.status(204).send("");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  deleteBook,
  patchBook,
  putBook,
  postBook,
  getBook,
  getBooks,
};
