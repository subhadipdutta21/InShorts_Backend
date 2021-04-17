const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();

const urls = require("./config/urls");
const typeDefs = require("./app/graphQL/typeDefs");
const resolvers = require("./app/graphQL/resolvers");

const { mongoConfigs } = urls;
const { URI } = mongoConfigs;
console.log(URI);
mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB connected!");
    } else console.log("DB connect error!", err);
  }
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = server;
