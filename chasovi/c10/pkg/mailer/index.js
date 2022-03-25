const formData = require("form-data");
const Mailgun = require("mailgun.js");
const { get } = require("../config");

const sendMail = async (to, subject, message) => {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: get("mailer").api_key,
  });

  let options = {
    from: get("mailer").sender_email,
    to: to,
    subject: subject,
    html: message,
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
