const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  categoryName: {
    type: String,
  },
});

const Categories = mongoose.model("categories", CategorySchema);
module.exports = Categories;
