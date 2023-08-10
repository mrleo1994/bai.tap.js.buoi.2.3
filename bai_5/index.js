function ket_qua() {
  var number_tag = document.getElementById("number_tag").value;
  var hang_dv = 0;
  var hang_chuc = 0;
  var ket_qua = 0;
  hang_dv = number_tag % 10;
  hang_chuc = Math.floor(number_tag / 10);
  ket_qua = hang_chuc + hang_dv;
  document.getElementById("ket_qua").innerHTML = ket_qua;
}
