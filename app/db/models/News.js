const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
  desc: {
    type: String,
  },
  categories: [
    {
      type: String,
    },
  ],
  imageURL: {
    type: String,
  },
  sourceURL: {
    type: String,
  },
  headLine: {
    type: String,
  },
  newsDate: {
    type: Date,
    default: Date.now,
  },
});

const News = mongoose.model("news", NewsSchema);
module.exports = News;
