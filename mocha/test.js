var assert = require('assert');
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return - when the values is not present', function(){
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});

describe('calculatorTest', function(){
    it.only('1+1', function(){
        assert.equal(1+1,2);
    });

    it('100 + 100', function(){
        assert.equal(100 + 100, 200);
    });

    it.only('1+4', function(){
        assert.equal(1+4, 5);
    });
});
