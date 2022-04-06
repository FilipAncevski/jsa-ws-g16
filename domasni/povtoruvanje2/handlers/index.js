const { remove, update, create, get, getByEmail } = require("../pkg/users");

const listUsers = async (req, res) => {
  try {
    return res.status(200).send(await get());
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const listUser = async (req, res) => {
  try {
    return res.status(200).send(await getByEmail(req.user.email));
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const addUser = async (req, res) => {
  try {
    const newUser = await create(req.body);
    return res.status(201).send(" ");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const editUser = async (req, res) => {
  try {
    const updatedUser = await update(req.params.id, req.body);
    return res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const deleteUser = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(200).send("Deleted");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  listUsers,
  listUser,
  addUser,
  editUser,
  deleteUser,
};
