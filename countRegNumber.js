function countRegNumber(countReg) {
  if (countReg.length < 1) {
    return 0;
  }
  var regCount = countReg.split(",");
  console.log(regCount.length);
  return regCount.length;
}

module.exports = countRegNumber;
