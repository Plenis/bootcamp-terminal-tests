function countAllFromTown(registration, location) {
  var countReg = [];
  var code = registration.split(",");

  for (var i = 0; i < code.length; i++) {
    var car = code[i].trim();
    console.log(car);

    if (car.startsWith(location)) {
      countReg.push(car);
    }
  }
  return countReg.length;
}

var fromStellies = countAllFromTown(
  "CL 124,CY 567,CL 345, CJ 456,CL 341",
  "CL"
);
console.log(fromStellies);
var fromCapeTown = countAllFromTown("CA 123, CA 456, CY 678", "CA");
console.log(fromCapeTown);

module.exports = countAllFromTown;
