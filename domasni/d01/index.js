const fs = require("fs");

const file = "package.json";

//==================================================================================================
//==================================================================================================

const checkFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.access(file, fs.constants.F_OK, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

checkFile(file)
  .then(() => {
    console.log("File exist");
  })
  .catch((err) => console.log(err.message));

(async () => {
  try {
    await checkFile(file);
    console.log("File exist");
  } catch (error) {
    console.log(error.message);
  }
})();

//==================================================================================================
//==================================================================================================

const appendFile = (fileName, fileContent) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, fileContent, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

appendFile("message.txt", "Appending data to file")
  .then(() => {
    console.log("Data appended successfully");
  })
  .catch((err) => console.log("Data couldn't be appeneded"));

(async () => {
  try {
    await appendFile("message.txt", "Appending data to file");
    console.log("Data appended successfully");
  } catch (error) {
    console.log(error.message);
  }
})();

//============================================================================================
//============================================================================================

const changeMode = (file, mode) => {
  return new Promise((resolve, reject) => {
    fs.chmod(file, mode, (err) => {
      if (err) return reject();
      return resolve();
    });
  });
};

changeMode("my-file.txt", 0o551)
  .then(() => {
    console.log("Mode changed to my-file.txt");
  })
  .catch((err) => console.log(err.message));

(async () => {
  try {
    await changeMode("my-file.txt", 0o771);
    console.log("Mode change to my-file.txt");
  } catch (error) {
    console.log(error.message);
  }
})();

//============================================================================================
//============================================================================================

const copyFile = (fileName, fileDestination) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(fileName, fileDestination, (err) => {
      if (err) return reject();
      return resolve();
    });
  });
};

copyFile("my-file.txt", "copy-of-my-file.txt")
  .then(() => {
    console.log("File copied successfully");
  })
  .catch((err) => console.log(err));

(async () => {
  try {
    await copyFile("my-file.txt", "copy-of-my-file.txt");
    console.log("File copied successfully");
  } catch (error) {
    console.log(error);
  }
})();

//============================================================================================
//============================================================================================

const createDirectory = (pathToFile) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(pathToFile, { recursive: true }, (err) => {
      if (err) return reject();
      return resolve();
    });
  });
};

createDirectory("domasni/homework")
  .then((directory) => {
    console.log("Directory created successfully", directory);
  })
  .catch((err) => console.log(err));

(async () => {
  try {
    await createDirectory("domasni/homework");
    console.log("Directory created successfully");
  } catch (error) {
    console.log(error);
  }
})();

//============================================================================================
//============================================================================================

const readFile = (pathToFile) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
};

readFile("my-file.txt")
  .then(() => {
    console.log("File read");
  })
  .catch((err) => console.log(err));

(async () => {
  try {
    await readFile("my-file.txt");
    console.log("File read successfully");
  } catch (error) {
    console.log(error);
  }
})();

//============================================================================================
//============================================================================================

const renameFile = (fileName, newFileName) => {
  return new Promise((resolve, reject) => {
    fs.rename(fileName, newFileName, (err) => {
      if (err) throw err;
      return resolve();
    });
  });
};

renameFile("my-file-renamed.txt", "my-new-file-renamed.txt")
  .then(() => {
    console.log("File renamed");
  })
  .catch((err) => console.log(err));

(async () => {
  try {
    await fs.rename("my-file-renamed.txt", "my-new-file-renamed.txt");
    console.log("File renamed successfully");
  } catch (error) {
    console.log(error);
  }
})();

//============================================================================================
//============================================================================================

const delFileDirectory = (contentName) => {
  return new Promise((resolve, reject) => {
    fs.rm(contentName, { recursive: true, force: true }, (err) => {
      if (err) return reject();
      return resolve();
    });
  });
};

delFileDirectory("forDelete")
  .then(() => {
    console.log("File deleted");
  })
  .catch((err) => console.log(err));

(async () => {
  try {
    await delFileDirectory("forDelete");
    console.log("File deleted");
  } catch (error) {
    console.log(error);
  }
})();

//============================================================================================
//============================================================================================
