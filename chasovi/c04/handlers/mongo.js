const mongoose = require("mongoose");

const Car = mongoose.model(
  "cars",
  {
    model: String,
    manufacturer: String,
    year: Number,
  },
  "cars"
);

const addCar = async (car) => {
  let c = new Car(car);
  return await c.save();
};

const removeCar = async (id) => {
  return await Car.deleteOne({ _id: id });
};

const updateCar = async (id, car) => {
  return await Car.updateOne({ _id: id, car });
};

const getAllCars = async () => {
  return await Car.find({});
};

const getCarById = async (id) => {
  return await Car.findOne({ _id: id });
};

module.exports = {
  getAllCars,
  getCarById,
  removeCar,
  updateCar,
  addCar,
};
