function mostProfitableDepartment(department) {
  var sales = [];
  for (var i = 0; i < department.length; i++) {
    if (department[i]) {
      sales.push(department[i].sales);
    }
  }
  var max = Math.max(...sales);
  var bestDep = [];
  for (var i = 0; i < department.length; i++) {
    if (department[i].sales === max) {
      bestDep.push(department[i].department);
    }
  }
  return bestDep;
}

module.exports = mostProfitableDepartment;
