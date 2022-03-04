const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, (err) => {
  if (err) return console.error(err);
  console.log("Server is live");
});

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
  let data = await readFile("./data");
  try {
    let person = {
      firstName: firstName,
      lastName: lastName,
    };
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

//     await addPerson("Filip", "Filipovski");
//     await addPerson("Dime", "Dimovski");
//     await addPerson("Stefan", "Stefanovski");
//     await addPerson("Miki", "Mikanovski");

//     let data = await readFile("./data");
//     console.log(data);

//     let data2 = await readFile("./data");
//     console.log(data2);
//   } catch (error) {
//     console.log(error);
//   }
// })();

const updatePerson = async (index, firstName, lastName) => {
  try {
    let data = await readFile("./data");
    let newData = data.map((person, i) => {
      if (index === i) {
        person = {
          firstName: firstName,
          lastName: lastName,
        };
      }
      return person;
    });
    writeFile(newData, "./data");
  } catch (error) {
    console.log(error);
  }
};

// const deletePerson = async (index) => {

// }
app.delete("/users/:index", async (req, res) => {
  try {
    const index = +req.params.index;
    await removePerson(index);
    return res.status(200).send("User deleted");
  } catch (error) {
    return res.status(500).send("Server error");
  }
});

app.get("/users", async (req, res) => {
  try {
    let data = await readFile("./data");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    await addPerson("Tomche", "Tomchevki");
    return res.status(201).send("Person added successfully");
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.put("/users/:index", async (req, res) => {
  try {
    const index = +req.params.index;
    await updatePerson(index, "Nikola", "Nikolovski");
    return res.status(200).send("Person updated successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});
