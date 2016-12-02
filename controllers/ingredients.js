var express = require('express');
var ctrl = express.Router();
var bodyParser = require('body-parser');

var Ingredient = require('../models/Ingredient');


ctrl.get('/', getAllIngredients);
ctrl.post('/', createIngredient);

/* controller functions */
function getAllIngredients(req, res, next) {
  Ingredient.find(function(error, ingredients) {
    if (error) console.log(error);
    res.json(ingredients);
  });
}

function createIngredient(request, response, next) {
  Ingredient.create(request.body, function(err, ingredient) {
    if (err) console.log(err);
    response.json(ingredient);
  })
}

module.exports = ctrl;
