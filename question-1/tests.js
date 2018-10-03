var should = require('should');
var cal = require('./calculator');

describe('Calculator', function () {
    
    describe('when Mulitplying two numbers', function () {
        
        it('should multiply two numbers correctly', function () {
            cal.Multiply(4, 4).should.equal(16);
        });
        it('should multiply two numbers correctly', function () {
            cal.Multiply(2, 5).should.equal(10);
        });
        it('add two numbers should not equal', function () {
            cal.Multiply(2, 2).should.not.equal(5);
        });
        it('should throw an error', function () {
           (function(){
                 cal.addTwoNumbers("x","y");
          }).should.throw();
        });
    })
})