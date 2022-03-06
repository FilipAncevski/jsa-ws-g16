const { readFile, writeFile } = require("../files");
const DATA_SOURCE = `${__dirname}/../../data`;

const addCar = async (car) => {
  try {
    let data = await readFile(DATA_SOURCE);
    data.push(car);
    await writeFile(data, DATA_SOURCE);
  } catch (error) {
    throw error;
  }
};

const removeCar = async (index) => {
  try {
    let data = await readFile(DATA_SOURCE);
    let out = data.filter((_, i) => index !== i);
    await writeFile(out, DATA_SOURCE);
  } catch (error) {
    throw error;
  }
};

const updateCar = async (index, newCar) => {
  try {
    let data = await readFile(DATA_SOURCE);
    let out = data.map((car, i) => {
      if (index == i) {
        car = newCar;
      }
      return car;
    });
    await writeFile(out, DATA_SOURCE);
  } catch (error) {
    throw error;
  }
};

const getCars = async () => {
  try {
    let data = await readFile(DATA_SOURCE);
    return data;
  } catch (error) {
    throw error;
  }
};

const getCarByIndex = async (index) => {
  try {
    let data = await readFile(DATA_SOURCE);
    let out = data.filter((car, i) => index == i);
    return out;
  } catch (error) {
    throw error;
  }
};

const partiallyUpdateCar = async (index, newCar) => {
  try {
    let data = await readFile(DATA_SOURCE);
    let out = data.map((originalCar, i) => {
      if (index == i) {
        originalCar = {
          car: newCar.car,
          manufacturer: originalCar.manufacturer,
        };
        console.log(originalCar);
        return originalCar;
      }
    });
    await writeFile(out, DATA_SOURCE);
  } catch (error) {
    throw error;
  }
};

const partiallyUpdateManufacturer = async (index, newManufacturer) => {
  try {
    let data = await readFile(DATA_SOURCE);
    let out = data.map((originalCar, i) => {
      if (index == i) {
        if (newManufacturer !== originalCar.manufacturer) {
          originalCar = {
            car: originalCar.car,
            manufacturer: newManufacturer.manufacturer,
          };
        }
        return originalCar;
      }
    });
    await writeFile(out, DATA_SOURCE);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addCar,
  updateCar,
  removeCar,
  getCars,
  getCarByIndex,
  partiallyUpdateCar,
  partiallyUpdateManufacturer,
};
