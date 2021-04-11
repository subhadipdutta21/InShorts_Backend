const dotenv = require("dotenv");
// dotenv.config();

module.exports = {
  dev: {
    DB_NAME: process.env.DB_NAME,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    CLUSTER: process.env.CLUSTER,
  },
  prod: {
    // DB_NAME: process.env.DB_NAME,
    // USER: process.env.USER,
    // PASSWORD: process.env.PASSWORD,
    // CLUSTER: process.env.CLUSTER,
  },
};
