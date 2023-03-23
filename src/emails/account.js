const sgMail = require("@sendgrid/mail");

const apiKey = process.env.SENDGRID_APIKEY;

sgMail.setApiKey(apiKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ananya@example.com",
    subject: "thnks fr jng us",
    text: `wlcm 2 th app, ${name} lmk hw u gt alng w th app`,
  });
};

const sendByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ananya@example.com",
    subject: "thnks fr hngng w us",
    text: `gdby ${name} lmk wht we cld do bttr`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendByeEmail,
};
