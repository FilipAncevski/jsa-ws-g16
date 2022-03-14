const { get } = require("./pkg/config");
require("./pkg/db");

const {
  deleteBook,
  getBook,
  getBooks,
  patchBook,
  postBook,
  putBook,
} = require("./handlers");

const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/books", getBooks);
app.get("/api/books/:id", getBook);
app.post("/api/books", postBook);
app.put("/api/books/:id", putBook);
app.patch("/api/books/:id", patchBook);
app.delete("/api/books/:id", deleteBook);

app.listen(get("services").port, (err) => {
  if (err) throw err;
  console.log(`Server is live on ${get("services").port} `);
});
