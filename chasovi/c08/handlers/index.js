const fs = require("fs");
const { makeID } = require("../pkg/uniqueID");

const DATA_SIZE = 1048576;
const DATA_TYPE = ["image/jpeg", "image/png", "image/pjpeg", "image/gif"];

const upload = async (req, res) => {
  if (DATA_SIZE < req.files.document.size) {
    return res.status(400).send("File upload is too large");
  }

  if (!DATA_TYPE.includes(req.files.document.mimetype)) {
    return res.status(404).send("File type is not supported");
  }

  const userDir = `user_${req.user.id}`;
  const userDirPath = `${__dirname}/../images/${userDir}`;

  if (!fs.existsSync(userDirPath)) {
    fs.mkdirSync(userDirPath);
  }
  const fileName = `${makeID(6)}_${req.files.document.name}`;
  const filePath = `${userDirPath}/${fileName}`;

  req.files.document.mv(filePath, (err) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }
    return res.status(201).send({ file_name: fileName });
  });
};

const download = async (req, res) => {
  let userDir = `user_${req.user.id}`;
  let userDirPath = `${__dirname}/../images/${userDir}`;
  let filePath = `${userDirPath}/${req.params.filename}`;
  if (!fs.existsSync(filePath)) {
    console.log(filePath);
    return res.status(404).send("File not foud");
  }
  res.download(filePath);
};

const listImages = async (req, res) => {
  try {
    let userDir = `user_${req.user.id}`;
    let userDirPath = `${__dirname}/../images`;
    let filePath = `${userDirPath}/${userDir}`;
    const files = fs.readdirSync(filePath);
    return res.status(200).send(files);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const listUsers = async (req, res) => {
  try {
    let userDirPath = `${__dirname}/../images`;
    const users = fs.readdirSync(userDirPath);
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const remove = async (req, res) => {
  try {
    let userDir = `user_${req.user.id}`;
    let userDirPath = `${__dirname}/../images/${userDir}`;
    let filePath = `${userDirPath}/${req.params.filename}`;

    if (fs.existsSync(filePath)) {
      fs.rmSync(filePath);
      return res.status(204).send("");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  upload,
  download,
  listImages,
  remove,
  listUsers,
};
