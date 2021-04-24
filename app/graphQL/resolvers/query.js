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
        statusCode: 400,
        statusMsg: error,
      };
    }
  },

  fetchNews: async (_, args, __, ___) => {
    const { limit = 10, page = 1 } = args.input;
    try {
      const resp = await News.find()
        .skip((page-1) * limit)
        .limit(limit);
      
      return {
        data: resp,
        page,
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
};
