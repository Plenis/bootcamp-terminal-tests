function yearsAgo(year) {
  const d = new Date();
  var n = d.getFullYear();
  return n - year;
}

module.exports = yearsAgo;
