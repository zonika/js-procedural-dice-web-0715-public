'use strict';

describe('dice', function() {

  describe("Dice#roll", function(){
    it("should return a number", function() {
      expect(typeof roll()).toBe("number");
    });      

    it("should return a number greater than 0", function() {
      expect(roll()).toBeGreaterThan(0);
    });  

    it("should return a number less than 7", function() {
      expect(roll()).toBeLessThan(7);
    });  
  });
});
