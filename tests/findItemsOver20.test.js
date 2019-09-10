let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20")

describe('findItemsOver20 function' , function(){
    it('should return all the products that have a quantity higher than 20' , function(){
        var item = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
             {name : 'apples', qty : 3},
        ];
        
          var results = findItemsOver20(item);
        
        assert.deepEqual(findItemsOver20(item), results);
    })
    
    it('should return an empty string if it doesnt have a quantity higher than 20' , function(){
        var item = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
             {name : 'apples', qty : 3},
        ];
        
          var results = findItemsOver20(item);
        
        assert.deepEqual(findItemsOver20(item), results)
    })

});
