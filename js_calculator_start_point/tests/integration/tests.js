var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  // Do the number buttons update the display of the running total?
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  // Do the arithmetical operations update the display with the result of the operation?
  it('can do arithmetical operations 22 + 22 = 44 on display', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('44');
  });

  // Can multiple operations be chained together?
  it('can chain operations 2 + 2 * 5 - 3 = 17 on display', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#clear')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('17');
  });

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('negative test 2 - 9 = -7', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#clear')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-7');
  });

  it('decimal test 7 / 2 = 3.5', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#clear')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3.5');
  });

  it('large number test 7 / 2 = 3.5', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#clear')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2222222222222222');
  });

  // If a number is divided by zero, is the output 'Not a number'? (You will need to modify the Calculator model to meet this requirement).
  it('divide by zero test 1 / 0 = Not A Number', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#clear')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not A Number');
  });

});