const mutations = require("./mutations");
const query = require("./query");
module.exports = {
  Query: {
    ...query,
  },
  Mutation: {
    ...mutations,
  },
  //   Subscription: {},
};
