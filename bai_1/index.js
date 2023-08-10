function tinh_luong() {
  var so_ngay_cong = document.getElementById("so_ngay_lam").value;
  console.log("🚘 ~ so_ngay_cong:", so_ngay_cong);
  var mot_ngay_cong = 100000;
  console.log("🚘 ~ mot_ngay_cong:", mot_ngay_cong);
  var ket_qua = 0;
  ket_qua = mot_ngay_cong * so_ngay_cong;
  console.log("🚘 ~ tinh_luong ~ ket_qua:", ket_qua)
  document.getElementById("tien_luong").innerHTML = ket_qua;
}
