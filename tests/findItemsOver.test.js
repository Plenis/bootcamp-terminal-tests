let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe("findItemsOver function", function() {
  it("should return products that have quantity higher than the threshold", function() {
    var itemList = [
      { name: "apples", qty: 10 },
      { name: "pears", qty: 37 },
      { name: "bananas", qty: 27 },
      { name: "apples", qty: 3 }
    ];

    var threshold = 25;
    var results = findItemsOver(itemList, 25);
    console.log(results);

    assert.deepEqual(findItemsOver(itemList, threshold), results);
  });

  it("should return products that have a quantity less than the treshold as an empty array", function() {
    var itemList = [
      { name: "apples", qty: 10 },
      { name: "pears", qty: 37 },
      { name: "bananas", qty: 27 },
      { name: "apples", qty: 3 }
    ];

    var threshold = 25;
    var results = findItemsOver(itemList, 25);
    console.log(results);

    assert.deepEqual(findItemsOver(itemList, threshold), results);
  });
});
