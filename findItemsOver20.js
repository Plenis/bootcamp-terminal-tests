function findItemsOver20(item) {
  var over20 = [];

  for (var i = 0; i < item.length; i++) {
    var quantity = item[i].qty;

    if (quantity > 20) {
      over20.push(item[i]);
    }
  }
  return over20;
}
var item = [
  { name: "apples", qty: 10 },
  { name: "pears", qty: 37 },
  { name: "bananas", qty: 27 },
  { name: "apples", qty: 3 }
];

var results = findItemsOver20(item);

module.exports = findItemsOver20;
