const { sendMail } = require("../pkg/mailer");
const { validate, Mail } = require("../pkg/mailer/validate");

const send = async (req, res) => {
  try {
    // await validate(req.body, Mail);
    await sendMail(req.body.to, "WELCOME", req.body.message);
    return res.status(204).send("Mail send");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  send,
};
