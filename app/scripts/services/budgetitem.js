'use strict';

angular.module('budgetApp')
  .service('Budgetitem', function Budgetitem($http) {
    function service(){
      var obj = {};
      
      obj.getAll = function(){
        return $http.get('/api/budgetItems');
      };

      return obj;
    }

    return service();
  });
