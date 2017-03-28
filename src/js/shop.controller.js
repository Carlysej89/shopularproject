(function() {
  'use strict';
    angular.module('shop')
        .controller('ShopController', ShopController);

  /**
   * ShopController function should produce a list of items with added tax.
   */
  function ShopController(){
    let vm = this;

     vm.tax = 0.0575;
     vm.newItem = {};



      vm.inventory = [

  { "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
  { "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
  { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
  { "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
  { "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
  { "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
  { "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
  { "id": 46, "name": "guitar", "price": 899, "quantity": 0, "color": "blue", "discount": 150 },
  { "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
  { "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
  { "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
  { "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }

      ];
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
   * @param {Object} item This should create a new item and place them in our
   * table.
   */
  vm.addItem = function addItem(item){
    if (typeof(item) !== 'object' ){
      return;
  }
    vm.inventory.push({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      color: item.color,
      discount:item.discount
    });
      vm.newItem = {};
    };

  }

}());
