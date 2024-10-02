let kilomet = prompt("Hãy nhập số km");
km = Number(kilomet);

if (km < 0 || isNaN(km)) {
  alert("invalid");
} else {
  let price = 0;
  let totalPriceTaxi = 0;
  if (km <= 1) {
    price = 5000;
    totalPriceTaxi = 1 * price;
  } else if (km >= 2 && km <= 30) {
    price = 4000;
    totalPriceTaxi = 5000 + (km - 1) * price;
  } else if (km > 30) {
    price = 3000;
    totalPriceTaxi = 5000 + 29 * 4000 + (km - 30) * price;
  }
  alert(
    `số km bạn đã di chuyển là ${km}. số tiền bạn phải thanh toán là ${totalPriceTaxi} `
  );
}
