(function() {
  'use strict';

  let expect = chai.expect;

  describe('inventory service', function(){
    let InventoryService;

    beforeEach(module('shop'));

    beforeEach(inject(function(_InventoryService_){
      InventoryService = _InventoryService_;
    }));
    it('should be able to give an array of inventory', function(){
      let result = InventoryService.getAllInventory();
      expect(result).to.be.an('array');



    });


  });

}());
