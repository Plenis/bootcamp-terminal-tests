let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('countRegNumber function' , function(){
    it('should return the number of registration numbers in the string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('should return 0 if there are no registration numbers in the string' , function(){
        assert.equal(countRegNumber(''), 0)
    });
});
