const { read, write } = require("../fileSystem");
const filePath = `${__dirname}/../files/data.json`;

const addPerson = async (firstName, lastName, age) => {
  try {
    let person = {
      name: firstName,
      surname: lastName,
      age,
    };

    let data = await read(filePath);

    data.push(person);

    await write(filePath, data);
  } catch (error) {
    throw console.log(error);
  }
};

const updatePerson = async (index, firstName, lastName, age) => {
  try {
    let data = await read(filePath);

    let newDate = data.map((e, i) => {
      if (i === Number(index)) {
        e = {
          name: firstName,
          surname: lastName,
          age,
        };
      }
      return e;
    });

    await write(filePath, newDate);
  } catch (error) {
    throw console.log(error);
  }
};

const delPerson = async (index) => {
  try {
    let data = await read(filePath);

    let newDate = data.filter((e, i) => i !== index);

    await write(filePath, newDate);
  } catch (error) {
    throw console.log(error);
  }
};

module.exports = {
  updatePerson,
  addPerson,
  delPerson,
};
