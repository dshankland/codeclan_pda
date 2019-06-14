var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  // set running total, then add the numbers

  // test can add 1 to 4 and get 5
  it('can add 1 and 4 to get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal)
  });

  // test can subtract 4 from 7 and get 3
  it('can subtract 4 from 7 to get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  });

  // test can multiply 3 by 5 and get 15
  it('can multiply 3 and 5 to get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal)
  });

  // test can divide 21 by 7 and get 3
  it('can divide 21 by 7 to get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  });

  //test calculator.numberClick() - concatenate multiple number button clicks
  it('can concatenate multiple number button clicks', function(){
    calculator.runningTotal = 0;
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    assert.equal(12345, calculator.runningTotal);
  });

  //test calculator.operatorClick() - chain multiple operations together
  it('can chain multiple operations together', function(){
    calculator.previousTotal = 0;
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.operatorClick('=');
    assert.equal(33, calculator.runningTotal);
  });

  //test calculator.clearClick() - clear the running total without affecting the calculation
  it('can clear the running total', function(){
    calculator.previousTotal = 0;
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.numberClick(9);
    calculator.numberClick(9);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(25, calculator.runningTotal);
  });

});
