const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  preferences: [{ catID: String, level: String }],
  verified: {
    type: Boolean,
  },
  bookmarks: [{ type: String }],
  verificationCode: { type: Number },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
