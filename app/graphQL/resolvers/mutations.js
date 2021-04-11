const News = require("../../db/models/News");

module.exports = {
  createNews: async (_, args, __, ___) => {
      try {
        console.log(args.input);
        const resp = await News.insertMany([args.input]);        
        console.log(resp)
        return {
            _id : resp[0]._id,
            statusCode: 200,
            statsuMsg:'success'
        }
    } catch (error) {
        console.log(error);
    }
  },
};
