const nodemailer = require("nodemailer");

module.exports = {
  sendMail: async (code) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_EMAIL_ID,
        pass: process.env.MAILER_PASSWORD,
      },
    });

    try {
      let info = await transporter.sendMail({
        from: '"dummy_inshorts_app_check 👌👌" <chandan.dutta62@gmail.com>',
        to: "dsubhadip21@gmail.com",
        subject: "Verification code",
        text: `Hey buddy, here's your verification code - ${code}`,
      });
      console.log(info);
    } catch (err) {
      console.log(err);
    }
  },
};
