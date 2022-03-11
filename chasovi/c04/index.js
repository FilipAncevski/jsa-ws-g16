require("./pkg/db");

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
