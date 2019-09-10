function findItemsOver(product, threshold) {
  var overThreshold = [];

  for (var i = 0; i < product.length; i++) {
    if (product[i].qty > threshold) {
      overThreshold.push(product[i]);
    }
  }
  return overThreshold;
}

module.exports = findItemsOver;
