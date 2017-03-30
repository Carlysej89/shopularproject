(function() {
  'use strict';
  angular.module('shop')
  .controller('ShopController', ShopController);

  ShopController.$inject = ['InventoryService'];

  /**
  * ShopController function should produce a list of items with added tax.
  */
  function ShopController(InventoryService){
    let vm = this;

    vm.tax = 0.0575;
    vm.newItem = {};
    vm.sortType = 'price';
    vm.sortReverse = false;
    vm.inventory = InventoryService.getAllInventory();
    /**
    * This function should give back the total price including the tax and discount
    *
    * @return {Number} this should return a number
    */
    vm.showTotal = function showTotal(item){
      let price = item.price - item.discount;

      return (price * (vm.tax + 1));

    };
  
    vm.addItem = function addItem(item){
      InventoryService.addItemToInventory(item);
      vm.newItem = {};
    };

    vm.changeSort = function changeSort(sortField) {
      vm.sortType = sortField;
      vm.sortReverse = !vm.sortReverse;
    };
  }
}());
