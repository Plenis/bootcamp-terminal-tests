let assert = require("assert");
let fromWhere = require("../fromWhere")

describe('fromWhere function' , function(){
    it('if car registration number starts with CY return Bellville' , function(){
        assert.equal(fromWhere('CY'), "Bellville");
    })
    
    it('if car registration number starts with CJ return Paarl' , function(){
        assert.equal(fromWhere('CJ'), "Paarl")
    })

    it('if car registration number starts with CA return Cape Town' , function(){
        assert.equal(fromWhere('CA'), "Cape Town")
    })

    it('should take a car registration number as a parameter and return the town the car is from' , function(){
        assert.equal(fromWhere('default'), 'Some other place!')
    })


});
