function quy_doi() {
  var tien_usd = parseFloat(document.getElementById("tien_usd").value);
  const ty_gia = 23500;
  var tien_vnd = 0;
  tien_vnd = tien_usd * ty_gia;
  console.log("🚘 ~ quy_doi ~ tien_vnd:", tien_vnd);
  document.getElementById("tien_vnd").innerHTML = tien_vnd + " VND";
}
