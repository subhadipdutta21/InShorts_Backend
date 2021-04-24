const { emailValidator } = require("../../../helper/validators");
const { sendMail } = require("../../../utils/mailer");
const News = require("../../db/models/News");
const User = require("../../db/models/User");

module.exports = {
  createNews: async (_, args, __, ___) => {
    try {
      const resp = await News.insertMany([args.input]);
      return {
        _id: resp[0]._id,
        statusCode: 200,
        statusMsg: "success",
      };
    } catch (error) {
      return {
        statusCode: 400,
        statusMsg: error,
      };
    }
  },

  createUser: async (_, args, __, ___) => {
    const { email } = args.input;
    if (!emailValidator(email)) {
      return {
        statusCode: 400,
        statusMsg: "Email invalid!",
      };
    }

    try {     
      // check for duplicate email
      const existingUser = await User.findOne({ email });
      if (existingUser)
        return {
          statusCode: 400,
          statusMsg: "User already exists!",
        };

      const verificationCode = Math.floor(Math.random() * 1000000);
      // got to send the mail
      sendMail(verificationCode);
      // create new user
      const user = {
        username: email.split("@")[0],
        email,
        preferences: [],
        verified: false,
        bookmarks: [],
        verificationCode,
      };

      const resp = await User.create(user);
      return {
        statusCode: 200,
        statusMsg: "Success, please verify the email!",
      };
    } catch (error) {
      return {
        statusCode: 400,
        statusMsg: error,
      };
    }
  },

  verifyUser: async (_, args, __, ___) => {
    const { code, userID } = args.input;
    try {
      // check valid user id provided or not
      const resp = await User.findById(userID);
      if (!resp) {
        return {
          statusCode: 400,
          statusMsg: "No such user found!",
        };
      }

      // verify code
      if (resp.verificationCode === code) {
        console.log("code matched");
        User.findByIdAndUpdate(
          { _id: userID },
          {
            verified: true,
          },
          (err, resp) => {
            if (err) console.log(err);
          }
        );
        return {
          statusCode: 200,
          statusMsg: "User verified successfully!",
        };
      }
      return {
        statusCode: 400,
        statusMsg: "Code did not match!",
      };
    } catch (error) {
      return {
        statusCode: 400,
        statusMsg: error,
      };
    }
  },
};
