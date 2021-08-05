var producer = require('./producer');
var province = require('./province');


var assert = require('assert');

describe('province', function(){
    it('shortfail', function(){
        const asia = new province(province.sampleProvinceData());
        assert.equal(asia.shortfail, 5);
    });
});

