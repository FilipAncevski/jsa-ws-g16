const cars = require("../pkg/cars");
const validator = require("../pkg/cars/validate");

const getAll = async (req, res) => {
  try {
    let cs = await cars.getAllCars();
    return res.status(200).send(cs);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getOne = async (req, res) => {
  try {
    let cs = await cars.getCarById(req.params.id);
    return res.status(200).send(cs);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const create = async (req, res) => {
  try {
    await validator.validate(req.body, validator.Car);
    let c = await cars.addCar(req.body);
    return res.status(201).send(c);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const update = async (req, res) => {
  try {
    await validator.validate(req.body, validator.Car);
    await cars.updateCar(req.params.id, req.body);
    return res.status(204).send("");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const updatePartial = async (req, res) => {
  try {
    await validator.validate(req.body, validator.CarPartial);
    await cars.updateCar(req.params.id, req.body);
    return res.status(204).send("");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const remove = async (req, res) => {
  try {
    await cars.removeCar(req.params.id);
    return res.status(204).send("");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  updatePartial,
  remove,
};
