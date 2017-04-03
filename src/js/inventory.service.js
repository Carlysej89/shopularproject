(function() {
  'use strict';
  angular.module('shop').factory('InventoryService', InventoryService);



  function InventoryService(){
    let inventory = JSON.parse(localStorage.getItem('item')) || [];


    /**
    * This function should create a new item
    * @param {Object} item Should have a name, price, quantity, color and discount
    * @return {Void}
    */
    function addItemToInventory(item){
      if (typeof(item) !== 'object' ){
        return;
      }
      if(typeof(item.name) !== 'string' || item.name.length < 1){
        return;
      }
      item.price = Number(item.price);
      if(Number.isNaN(item.price) || item.price < 0.01){
        return;
      }
      inventory.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount: item.discount
      });
      localStorage.setItem('item', angular.toJson(inventory));
    }

    /**
     * [getAllInventory description]
     * @return {[type]} [description]
     */
    function getAllInventory(){
      return inventory;
    }
    return {
      addItemToInventory: addItemToInventory,
      getAllInventory: getAllInventory
    };
  }

}());
