let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill")

describe('totalPhoneBill function' , function(){
    it('should calculate the total bill for sms' , function(){
        assert.equal(totalPhoneBill('sms, sms, sms'), 'R1.95');
    })
    
    it('should calculate the total bill for call' , function(){
        assert.equal(totalPhoneBill('call, call, call, call'), 'R11.00')
    })

    it('should calculate the total bill for both call and sms' , function(){
        assert.equal(totalPhoneBill('call, call, call, sms, sms, call sms'), 'R9.55')
    })


});
