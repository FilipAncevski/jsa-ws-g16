const { read, write } = require("../fileSystem");
const pathToFile = `${__dirname}/../files/data.json`;
const { addPerson, updatePerson, delPerson } = require("../functions");

const seeCar = async (req, res) => {
  try {
    let data = await read(pathToFile);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
const addCar = async (req, res) => {
  try {
    const newPerson = await addPerson(
      req.body.name,
      req.body.surname,
      req.body.age
    );
    console.log(newPerson);
    return res.status(200).send(newPerson);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
const updateCar = async (req, res) => {
  try {
    const updatedPerson = await updatePerson(
      req.params.index,
      req.body.name,
      req.body.surname,
      req.body.age
    );
    console.log(updatedPerson);
    return res.status(200).send(updatedPerson);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
const deleteCar = async (req, res) => {
  try {
    await delPerson(Number(req.params.index));
    return res.status(200).send("Deleted");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  seeCar,
  addCar,
  updateCar,
  deleteCar,
};
