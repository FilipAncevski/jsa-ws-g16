const fs = require("fs");
const express = require("express");

const readFile = (source) => {
  return new Promise((success, fail) => {
    fs.readFile(`${source}.json`, "utf8", (err, data) => {
      if (err) return fail(err);
      let out = JSON.parse(data);
      return success(out);
    });
  });
};

const writeFile = (data, destination) => {
  return new Promise((success, fail) => {
    let out = JSON.stringify(data);
    fs.writeFile(`${destination}.json`, out, (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

const addPerson = async (firstName, lastName) => {
  try {
    let person = {
      firstName: firstName,
      lastName: lastName,
    };
    let data = await readFile("./data");
    data.push(person);
    await writeFile(data, "./data");
  } catch (error) {
    throw error;
  }
};

const removePerson = async (index) => {
  try {
    let data = await readFile("./data");
    let out = data.filter((_, i) => index !== i);
    await writeFile(out, "./data");
  } catch (error) {
    console.log(error);
  }
};

// (async () => {
//   try {
//     let someData = [];
//     await writeFile(someData, "./data");

//     await addPerson("Pero", "Perovski");
//     await addPerson("Ivan", "Ivanovski");
//     await addPerson("Janko", "Jankovski");
//     await addPerson("Stanko", "Stankovski");

//     let data = await readFile("./data");
//     console.log(data);

//     await removePerson(2);

//     let data2 = await readFile("./data");
//     console.log(data2);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// object -> JSON.stringify(...) -> JSON (string)
// JSON (string) => JSON.parse(...) -> object

// const sob = (a, b) => {
//   return a + b;
// };

const api = express();

api.use(express.json());

api.get("/users", async (req, res) => {
  try {
    let data = await readFile("./data");
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

api.post("/users", async (req, res) => {
  //add the person sent
});

api.delete("/users/:index", async (req, res) => {
  // delete person by index number
});

api.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server is live");
});
