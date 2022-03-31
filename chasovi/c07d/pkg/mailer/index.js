const { get } = require("../config");
const { readFile } = require("fs");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

// const mg = mailgun.client({
//   username: "api",
//   key: get("mailgun").key,
// }); My code

// const sendMail = async (from, subject, data) => {
//   try {
//     await mg.messages.create(get("mailgun").domain, {
//       from: from,
//       to: get("mailgun").me,
//       subject,
//       text: data,
//     });
//   } catch (error) {
//     throw error;
//   }
// };      // My code

//Bojan's code

const TEMPLATES = {
  FORGOT_PASSWORD: {
    title: "Here is your link to create a new password",
    template: "forgot_password.html",
  },
  RESET_PASSWORD: {
    title: "Here is your link to reset your password",
    template: "reset_password.html",
  },
};

const readMyFile = async (file) => {
  return new Promise((resolve, reject) => {
    readFile(file, "utf-8", (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

const sendMail = async (to, type, data) => {
  const mg = mailgun.client({
    username: "api",
    key: get("mailgun").key,
  });

  let title = TEMPLATES[type].title;

  const templatePath = `${__dirname}/../../email_templates/${TEMPLATES[type].template}`;

  let content = await readMyFile(templatePath);

  for (let i in data) {
    let regex = new RegExp(`\{\{${i}\}\}`, "g");
    content = content.replace(regex, data[i]);
  }

  options = {
    from: get("mailgun").me,
    to: to,
    subject: title,
    html: content,
  };

  try {
    const res = await mg.messages.create(get("mailgun").domain, options);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendMail,
};
