const {
  addExercise,
  getAllExercises,
  getOneExercise,
  partiallyUpdateExerice,
  partiallyUpdateTargerGroup,
  removeExercise,
  updateExercise,
} = require("../pkg/exercises");
const { readFile, writefile } = require("../pkg/files");
const DATA_SOURCE = `${__dirname}/../../data`;

const get = async (req, res) => {
  try {
    const data = await getAllExercises();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const getByIndex = async (req, res) => {
  try {
    const exercise = await getOneExercise(Number(req.params.index));
    return res.status(200).send(exercise);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const post = async (req, res) => {
  try {
    await addExercise(req.body);
    return res.status(201).send(`Exercise successfully updated`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const deleteExericise = async (req, res) => {
  try {
    await removeExercise(Number(req.params.index));
    return res.status(200).send("Exercise deleted");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const update = async (req, res) => {
  try {
    await updateExercise(Number(req.params.index), req.body);
    return res.status(200).send("Exercise successfully updated");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const updateParticalExercise = async (req, res) => {
  try {
    await partiallyUpdateExerice(Number(req.params.index), req.body.exercise);
    return res.status(201).send(`Exericse successfully updated`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const updateParticalTargetGroup = async (req, res) => {
  try {
    await partiallyUpdateTargerGroup(
      Number(req.params.index),
      req.body.targetGroup
    );
    return res.status(201).send(`Target group successfully updated`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  deleteExericise,
  get,
  getByIndex,
  post,
  update,
  updateParticalExercise,
  updateParticalTargetGroup,
};
