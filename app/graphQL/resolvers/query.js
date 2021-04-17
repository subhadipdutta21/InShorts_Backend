const Categories = require("../../db/models/Category");
const News = require("../../db/models/News");

module.exports = {
  fetchCategories: async (_, args, __, ___) => {
    try {
      const resp = await Categories.find();
      console.log(resp);
      return {
        categories: resp,
        statusCode: 200,
        statusMsg: "success",
      };
    } catch (error) {
      return {
        categories: [],
        statusCode: 400,
        statusMsg: error,
      };
    }
  },

  fetchNews: async (_, args, __, ___) => {
    try {
      const resp = await News.find();
      console.log(resp);
      return {
        data: resp,
        statusCode: 200,
        statusMsg: "success",
      }
    } catch (error) {
      return {
        data: [],
        statusCode: 400,
        statusMsg: error,
      };
    }
  },
};
