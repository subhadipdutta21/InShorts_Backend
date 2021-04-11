const Categories = require("../../db/models/Category")

module.exports = {
    fetchCategories : async (_,args,__,___) => {
        try {
            const resp  = await Categories.find()
            console.log(resp)            
            return {
                categories : resp,
                statusCode: 200,
                statusMsg: 'success'
            }
        } catch (error) {
            return {
                categories : [],
                statusCode: 400,
                statusMsg: error
            }
        }
    }
}