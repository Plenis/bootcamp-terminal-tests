function totalPhoneBill(bill) {
  var call = [];
  var sms = [];
  bill = bill.split(", ");
  console.log(bill);

  for (var i = 0; i < bill.length; i++) {
    var total = bill[i];

    if ("sms" === total) {
      sms.push(total);
    }
    if ("call" === total) {
      call.push(total);
    }
  }
  var totalBill = sms.length * 0.65 + call.length * 2.75;
  console.log(sms.length);
  console.log(call.length);
  return "R" + totalBill.toFixed(2);
}

module.exports = totalPhoneBill;
