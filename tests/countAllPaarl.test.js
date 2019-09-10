let assert = require("assert");
let countAllPaarl = require("../countAllPaarl")

describe('countAllPaarl function' , function(){
    it('should return the number of registration numbers in the string for a specific town (Cape Town)' , function(){
        assert.equal(countAllPaarl('CJ 123, CA 546'), 1);
    })
    
    it('should return the number of registration numbers in the string for Paarl' , function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123, CJ 345 123, CK 345, CJ 123'), 5)
    })

});
