'use strict';

describe('dice', function() {

  var dice;
  beforeEach(function() {
    dice = new Dice();
  });

  describe("Dice#roll", function(){
    it("should return a number", function() {
      expect(typeof dice.roll()).toBe("number");
    });      

    it("should return a number greater than 0", function() {
      expect(dice.roll()).toBeGreaterThan(0);
    });  

    it("should return a number less than 7", function() {
      expect(dice.roll()).toBeLessThan(7);
    });  
  });
});
