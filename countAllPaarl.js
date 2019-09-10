function countAllPaarl(registration) {
  var countReg = [];

  var code = registration.split(", ");

  for (var i = 0; i < code.length; i++) {
    var car = code[i];
    console.log(car);
    if (car.startsWith("CJ")) {
      countReg.push(car);
    }
  }
  return countReg.length;
}

module.exports = countAllPaarl;
