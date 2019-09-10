function regCheck(cars, code) {
  return cars.endsWith(code);
}

var isGP = regCheck("DV 23 NB GP", "GP");
console.log(isGP); //true

var isMP = regCheck("DV 23 LP GP", "MP");
console.log(isMP); //false

var isBellville = regCheck("CY189-012", "CY");
console.log(isBellville); //false

var isDurban = regCheck("CY189-012", "ND");
console.log(isDurban); //false

module.exports = regCheck;
