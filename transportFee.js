function transportFee(money) {
  switch (money) {
    case "morning":
      return "R20";
    case "afternoon":
      return "R10";
    case "nightshift":
      return "free";
    default:
      return "You pay nothing!";
  }
}

module.exports = transportFee;
