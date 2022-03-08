const { readFile, writeFile } = require("../files");
const DATA_SOURCE = `${__dirname}/../../data`;

const getAllExercises = async () => {
  try {
    let data = await readFile(DATA_SOURCE);
    return data;
  } catch (error) {
    throw error;
  }
};

const addExercise = async (exercise) => {
  try {
    let data = await readFile(DATA_SOURCE);
    data.push(exercise);
    await writeFile(data, DATA_SOURCE);
  } catch (error) {
    throw error;
  }
};

const removeExercise = async (index) => {
  try {
    let data = await readFile(DATA_SOURCE);
    data = data.filter((_, i) => i !== index);
    await writeFile(data, DATA_SOURCE);
  } catch (error) {
    throw error;
  }
};

const getOneExercise = async (index) => {
  try {
    let data = await readFile(DATA_SOURCE);
    return data[index];
  } catch (error) {
    throw error;
  }
};

const updateExercise = async (index, exercise) => {
  try {
    let data = await readFile(DATA_SOURCE);
    data = data.map((oldExercise, i) => {
      if (index === i) {
        oldExercise = exercise;
      }
      return oldExercise;
    });
    await writeFile(data, DATA_SOURCE);
  } catch (error) {
    throw error;
  }
};

const partiallyUpdateExerice = async (index, newExercise) => {
  try {
    let data = await readFile(DATA_SOURCE);
    let out = data.map((element, i) => {
      if (i == index) {
        element.exercise = newExercise;
        console.log(element);
      }
      return element;
    });
    await writeFile(out, DATA_SOURCE);
    console.log(out);
  } catch (error) {
    throw error;
  }

  // try {
  //   let data = await readFile(DATA_SOURCE);
  //   let out = data.map((oldExercise, i) => {
  //     if (index == i) {
  //       oldExercise = {
  //         exercise: newExercise.exercise,
  //         targetGroup: oldExercise.targetGroup,
  //       };
  //       return oldExercise;
  //     }
  //   });
  //   await writeFile(out, DATA_SOURCE);
  // } catch (error) {
  //   throw error;
  // }
};

const partiallyUpdateTargerGroup = async (index, newTargerGroup) => {
  try {
    try {
      let data = await readFile(DATA_SOURCE);
      let out = data.map((element, i) => {
        if (i == index) {
          element.targetGroup = newTargerGroup;
        }
        return element;
      });
      await writeFile(out, DATA_SOURCE);
    } catch (error) {
      throw error;
    }
    // let data = await readFile(DATA_SOURCE);
    // let out = data.map((oldExercise, i) => {
    //   if (index == i) {
    //     oldExercise = {
    //       exercise: oldExercise.exercise,
    //       targetGroup: newTargerGroup.targetGroup,
    //     };
    //     return oldExercise;
    //   }
    // });
    // await writeFile(out, DATA_SOURCE);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateExercise,
  partiallyUpdateExerice,
  partiallyUpdateTargerGroup,
  getAllExercises,
  getOneExercise,
  removeExercise,
  addExercise,
};
