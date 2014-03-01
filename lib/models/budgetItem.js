'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * BudgetItem Schema
 */
var BudgetItemSchema = new Schema({
  description: String,
  amount: Number
});


mongoose.model('BudgetItem', BudgetItemSchema);
