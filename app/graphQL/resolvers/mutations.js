const News = require("../../db/models/News");

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
      console.log(error);
    }
  },
};
