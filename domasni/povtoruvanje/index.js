// const addPerson = async (firstName, lastName, age) => {
//   try {
//     let person = {
//       name: firstName,
//       surname: lastName,
//       age,
//     };

//     let data = await read(filePath);

//     data.push(person);

//     await write(filePath, data);
//   } catch (error) {
//     throw console.log(error);
//   }
// };

// // addPerson("Elena", "Elenovska", 35);

// const updatePerson = async (index, firstName, lastName, age) => {
//   try {
//     let data = await read(filePath);

//     let newDate = data.map((e, i) => {
//       if (i === Number(index)) {
//         e = {
//           name: firstName,
//           surname: lastName,
//           age,
//         };
//       }
//       return e;
//     });
//     console.log(newDate);

//     await write(filePath, newDate);
//   } catch (error) {
//     throw console.log(error);
//   }
// };

// updatePerson(1, "Madzo", "Madzovski", 27);

const express = require("express");
const { seeCar, addCar, updateCar, deleteCar } = require("./handlers");

const app = express();

app.use(express.json());

app.get("/car", seeCar);
app.post("/car", addCar);
app.put("/car/:index", updateCar);
app.delete("/car/:index", deleteCar);

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server is live");
});
