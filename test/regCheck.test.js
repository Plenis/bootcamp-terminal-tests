let assert = require("assert");
let regCheck = require("../regCheck");


describe('regCheck function' , function(){
    it('should return true for GP if car registration ends with GP' , function(){
        assert.deepEqual(regCheck('DV 23 NB GP','GP'),true);
    });
    
    it('should return false for MP if car registration ends with MP' , function(){
        assert.deepEqual(regCheck('DV 23 LP GP', 'MP'),false);
    });

    it('should return false if car registration number starts with CY' , function(){
        assert.deepEqual(regCheck('CY 123 ', 'CY'),false);
    });
});