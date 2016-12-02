var mongoose = require('mongoose');

// 1. Define a schema for my Objects in my Collection
var FoodSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  recipe: String
});

// 2. Export my schema as a model
module.exports = mongoose.model('Food', FoodSchema);