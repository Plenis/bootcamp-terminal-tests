let assert = require("assert");
let isFromBellville = require("../isFromBellville")

describe('isFromBellville function' , function(){
    it('should return true if registration number is from Bellville' , function(){
        assert.equal(isFromBellville('CY 123'),true);
    });
    it('should return false if car registration number is not from Bellville' , function(){
        assert.equal(isFromBellville('CA 123'),false);
    });
});