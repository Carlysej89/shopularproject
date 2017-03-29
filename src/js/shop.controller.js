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
  /**
   * This function should create a new item
   * @param {Object} item Should have a name, price, quantity, color and discount
   * @return {Void}
   */
  vm.addItem = function addItem(item){
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

      vm.newItem = {};
    };
    vm.changeSort = function changeSort(sortField) {
      vm.sortType = sortField;
      vm.sortReverse = !vm.sortReverse;
  };
}
}());
