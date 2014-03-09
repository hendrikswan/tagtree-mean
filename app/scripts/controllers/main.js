'use strict';

angular.module('budgetApp')
  .controller('MainCtrl', function ($scope, Budgetitem) {
    Budgetitem.getAll()
    .success(function(items){
      $scope.budgetItems = items;
    })
    .error(function(){
      console.log('error while trying to get budgetItems from server');
    });

    $scope.newItem = {};

    $scope.add = function($event){
      if($event.keyCode === 13 &&
          $scope.newItem.description !== '' &&
          $scope.newItem.amount !== ''){
        Budgetitem.addItem($scope.newItem);
      }
    };


  });
