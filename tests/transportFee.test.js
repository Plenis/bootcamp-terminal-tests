let assert = require("assert");
let transportFee = require("../transportFee")

describe('transportFee function' , function(){
    it('should return the right price for morning shift' , function(){
        assert.equal(transportFee('morning'), 'R20');
    })

    it('should return the right price for afternoon shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10')
    })

   
    it('should return the right price for night shift' , function(){
        assert.equal(transportFee('night'), 'You pay nothing!')
    })


});