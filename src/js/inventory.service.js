(function() {
  'use strict';
  angular.module('shop').factory('InventoryService', InventoryService);

  InventoryService.$inject = ['$location'];

  function InventoryService(){
    let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

    function addInventory(inventory){

      Inventory.push({
        name: inventory.name,
        price: inventory.price,
        quantity: inventory.quantity,
        color: inventory.color,
        discount: inventory.discount
      });
      localStorage.setItem('inventory', angular.toJson(inventory));
    }
    function getAllInventory(){
      return inventory;
    }
    return {
      addInventory: addInventory,
      getAllInventory: getAllInventory
    };
  }

}());
