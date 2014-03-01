'use strict';

angular.module('budgetApp')
  .controller('MainCtrl', function ($scope, Budgetitem) {
    Budgetitem.getAll()
    .success(function(budgetItems){
      $scope.budgetItems = budgetItems;
    })
    .error(function(){
      console.log("error while trying to get budgetItems from server");
    });
  });
