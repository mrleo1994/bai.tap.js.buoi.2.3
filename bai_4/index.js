function ket_qua() {
  var chieu_dai = parseFloat(document.getElementById("chieu_dai").value);
  var chieu_rong = parseFloat(document.getElementById("chieu_rong").value);
  var chu_vi = 0;
  var dien_tich = 0;
  chu_vi = (chieu_dai + chieu_rong) * 2;
  dien_tich = chieu_dai * chieu_rong;
  document.getElementById("chu_vi").innerHTML = chu_vi + " cm";
  document.getElementById("dien_tich").innerHTML = dien_tich + " cm2";
}
