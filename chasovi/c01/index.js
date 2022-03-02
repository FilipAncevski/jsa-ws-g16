const fs = require("fs");

console.log("Hello world!");

setTimeout(() => {
  console.log("Timeout");
});

console.log("end");

const fn1 = (a, b, cb) => {
  cb(a + b);
};

fn1(3, 6, (res) => {
  console.log(res * 100);
});

fn1(3, 6, (res) => {
  return res * 10;
});

//creating promises

//1 - create an empty function

const pr1 = () => {};

// 2 - setup the promise return
const pr2 = () => {
  return new Promise();
};

// 3 - assign the logic function
const pr3 = () => {
  return new Promise(() => {});
};

// 4 - set the success and fail (response and reject)
const pr4 = () => {
  return new Promise((succes, fail) => {
    // your code goes here
  });
};

// 5 - finalize the function
const pr5 = (a, b) => {
  return new Promise((success, fail) => {
    let res = a * b;
    if (res > 100 || res < 0) {
      return fail("result out of range");
    }
    return success(res);
  });
};

// pr5(1, 100)
//   .then((res) => {
//     console.log(`Your result is ${res}`);
//   })
//   .catch((err) => console.log(err));
(async () => {
  try {
    await pr5(1, 100);
  } catch (error) {
    console.log(err);
  }
})();

// writeFile('message.txt', 'Hello Node.js', 'utf8', callback);

const fileWrite = (file, content) => {
  return new Promise((success, fail) => {
    fs.writeFile(file, content, "utf8", (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

fileWrite("text.txt", "Test generaciaj 16")
  .then(() => {
    console.log("Successfully wrote to file");
  })
  .catch((err) => console.log(err));
