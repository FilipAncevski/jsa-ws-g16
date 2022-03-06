const express = require("express");
const cars = require("./handlers/cars");

const api = express();

api.use(express.json());

api.get("/api/cars", cars.getAll);
api.get("/api/cars/:index", cars.getOne);
api.post("/api/cars/", cars.create);
api.put("/api/cars/:index", cars.update);
api.patch("/api/cars/car/:index", cars.updateParticalCar);
api.patch("/api/cars/manufacturer/:index", cars.updateParticalManufacturer);
api.delete("/api/cars/:index", cars.remove);

api.listen(10000, (err) => {
  if (err) return console.log(err);
  return console.log("Server started on port 10 000");
});

// REST API se tehnicki servisite sto gi pisuvame

// POST - create a data record
// GET - retrieve data record
// PUT - update whole data record
// PATCH - partial update of data record
// DELETE - delete a data record

// user subresources

// GET /api/users/:id/location - get the locaton for the user with id - :id
// PUT /api/users/:id/location - update the location for the user with id - :id
// PATCH /api/users/:id/location - partically updates the location for the user with id - :id

// 2** success ( 200 - ok, 201 - created, 204 - no content)
// 3** redirect
// 4** application error
// 5** server errors
