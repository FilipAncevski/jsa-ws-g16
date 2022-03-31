const formData = require("form-data");
const Mailgun = require("mailgun.js");
const { get } = require("../config");
const fs = require("fs");

const mailTemplates = {
  PASSWORD_RESET: {
    title: "Your password reset link has been generated",
    template: "reset_password.html",
  },
  WELCOME: {
    title: "Welcome to our website",
    template: "welcome.html",
  },
};

const readTemplate = async (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

const sendMail = async (to, type, data) => {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: get("mailer").api_key,
  });

  let title = mailTemplates[type].title;

  let templatePath = `${__dirname}/../../email_templates/${mailTemplates[type].template}`;

  let content = await readTemplate(templatePath);

  for (let i in data) {
    let regex = new RegExp(`\{\{${i}\}\}`, "g");
    content = content.replace(regex, data[i]);
  }

  let options = {
    from: get("mailer").sender_email,
    to: to,
    subject: title,
    html: content,
  };

  try {
    let res = await mg.messages.create(get("mailer").domain, options);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendMail,
};
