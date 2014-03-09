'use strict';

angular.module('budgetApp')
  .service('Budgetitem', function Budgetitem($http) {
    function service(){
      var obj = {};

      obj.getAll = function(){
        return $http.get('/api/budgetItems')
          .success(function(items){
            obj.items = items;
            return obj.items;
          });
      };

      obj.addItem = function(newItem){
        var item = _(newItem).clone();
        obj.items.push(item);

        newItem.description = '';
        newItem.amount = '';

        $http.post('/api/budgetItems', item);
      }


      return obj;
    }

    return service();
  });
