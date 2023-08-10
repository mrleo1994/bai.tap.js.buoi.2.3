function trung_binh() {
  var number1 = parseFloat(document.getElementById("no_1").value);
  console.log("🚘 ~ trung_binh ~ number1:", number1);
  var number2 = parseFloat(document.getElementById("no_2").value);
  console.log("🚘 ~ trung_binh ~ number2:", number2);
  var number3 = parseFloat(document.getElementById("no_3").value);
  console.log("🚘 ~ trung_binh ~ number3:", number3);
  var number4 = parseFloat(document.getElementById("no_4").value);
  console.log("🚘 ~ trung_binh ~ number4:", number4);
  var number5 = parseFloat(document.getElementById("no_5").value);
  console.log("🚘 ~ trung_binh ~ number5:", number5);
  var ket_qua = 0;
  var sum = number1 + number2 + number3 + number4 + number5;
  console.log("🚘 ~ trung_binh ~ sum:", sum);
  ket_qua = (number1 + number2 + number3 + number4 + number5) / 5;
  console.log("🚘 ~ trung_binh ~ ket_qua:", ket_qua);
  document.getElementById("ket_qua").innerHTML = ket_qua;
}
