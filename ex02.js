function checkNumber(n) {
  n = Number(n);
  if (isNaN(n)) {
    return "Ivalid";
  } else {
    if (n % 15 === 0) {
      return "Chia hết cho cả 3 số 3, 5 và 15";
    } else if (n % 3 === 0) {
      return "Chia hết cho 3";
    } else if (n % 5 === 0) {
      return "Chia hết cho 5";
    } else {
      return "Không chia hết";
    }
  }
}
console.log(checkNumber(15));
console.log(checkNumber(9));
console.log(checkNumber(10));
console.log(checkNumber("adsa"));
console.log(checkNumber(11));
