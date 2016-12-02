var express = require('express');
var ctrl = express.Router();
var bodyParser = require('body-parser');

var Food = require('../models/Food');

ctrl.get('/', getAllFoods);
ctrl.get('/:id', getFoodById);
ctrl.post('/', createFood);
ctrl.patch('/:id', updateFoodById);
ctrl.delete('/:id', deleteFoodById);

/* controller functions */
function getAllFoods(req, res, next) {
  //mongoose model.find()
  Food.find(function(error, foods) {
    if (error) console.log(error);
    res.json(foods);
  });
}

function getFoodById(req, res, next) {
  console.log(req.params.id);
  Food.findById(req.params.id, function(err, food) {
    if (err) console.log(err);
    res.json(food);
  })
}

function updateFoodById(req, res, next) {
  // (id, {}, callback)
  Food.findByIdAndUpdate(req.params.id, req.body, function(err, food) {
    if (err) console.log(err);
    res.json(food);
  });
}

function deleteFoodById(req, res, next) {
  console.log(req.params.id);
  Food.findByIdAndRemove(req.params.id, req.body, function(err, food) {
    console.log('halp')
    if (err) console.log(err);
    // show the food you just removed
    res.json(food);
  })
}

function createFood(req, res, next) {
  //mongoose model.create(obj, callback)
  Food.create(req.body, function(error, food) {
    if (error) console.log(error);
    res.json(food);
  });
}

module.exports = ctrl;
