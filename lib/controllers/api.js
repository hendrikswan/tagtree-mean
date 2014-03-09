'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    BudgetItem = mongoose.model('BudgetItem');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.budgetItems = function(req, res) {
  return BudgetItem.find(function (err, budgetItems) {
    if (!err) {
      return res.json(budgetItems);
    } else {
      return res.send(err);
    }
  });
};

exports.addBudgetItem = function(req, res) {
  return BudgetItem.create(req.body, function (err, budgetItem) {
    if (!err) {
      return res.json(budgetItem);
    } else {
      return res.send(err);
    }
  });
};