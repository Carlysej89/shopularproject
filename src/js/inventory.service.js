(function() {
  'use strict';
  angular.module('shop').factory('InventoryService', InventoryService);

  InventoryService.$inject = ['$location'];

  function InventoryService(){
    let inventory = JSON.parse(localStorage.getItem('item')) || [];



    function addItemToInventory(item){
      if (typeof(item) !== 'object' ){
        return;
      }
      if(typeof(item.name) !== 'string' || item.name.length < 1){
        return;
      }
      item.price = Number(item.price);
      if(Number.isNaN(item.price) ){
        return;
      }
      Item.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount: item.discount
      });
      localStorage.setItem('item', angular.toJson(inventory));
    }
    function getAllInventory(){
      return inventory;
    }
    return {
      addItemToInventory: addItemToInventory,
      getAllInventory: getAllInventory
    };
  }

}());
