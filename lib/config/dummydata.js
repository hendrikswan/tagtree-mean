'use strict';

var mongoose = require('mongoose'),
  BudgetItem = mongoose.model('BudgetItem');

/**
 * Populate database with sample application data
 */

BudgetItem.find({}).remove(function() {
  BudgetItem.create({
    description: 'Salary',
    amount: 1700
  }, {
    description: 'Screencasts',
    amount: 10
  }, function() {
      console.log('finished populating budget items');
  }
  );
});
