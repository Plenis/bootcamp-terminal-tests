let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday function' , function(){
    it('should return false if is not a weekday' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it('should return true if day is a weekday' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
});
