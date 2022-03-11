const {
  getAllCars,
  getCarById,
  removeCar,
  updateCar,
  addCar,
} = require("../pkg/");

const getAll = async (req, res) => {
  try {
    const cars = await getCars();
    return res.status(200).send(cars);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
const getOne = async (req, res) => {
  try {
    const car = await getCarByIndex(Number(req.params.index));
    return res.status(200).send(car);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
const create = async (req, res) => {
  try {
    await addCar(req.body);
    return res.status(201).send("Car created");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
const update = async (req, res) => {
  try {
    await updateCar(Number(req.params.index), req.body);
    return res.status(201).send(`Car successfully updated`);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
const updateParticalCar = async (req, res) => {
  try {
    await partiallyUpdateCar(Number(req.params.index), req.body);
    return res.status(201).send(`Car successfully updated`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
const updateParticalManufacturer = async (req, res) => {
  try {
    await partiallyUpdateManufacturer(Number(req.params.index), req.body);
    return res.status(201).send(`Car successfully updated`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
const remove = async (req, res) => {
  try {
    await removeCar(Number(req.params.index));
    return res.status(201).send(`Successfully removed car`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  updateParticalCar,
  updateParticalManufacturer,
  remove,
};
