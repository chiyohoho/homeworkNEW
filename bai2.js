var showMatHang = rutGon(".show_mathang");
var showGia = rutGon(".show_gia");
var showSoLuong = rutGon(".show_soluong");
var showTotal = rutGon(".show_total");
var showDiscount = rutGon(".show_discount");

var valueGia = rutGon(".mathang");
var valueSoLuong = rutGon("#soluong");

var getTotal = rutGon(".btn");

getTotal.addEventListener("click", tinhTien);

function rutGon(short) {
    return document.querySelector(short)
}

function tinhTien() {
    giaSanPham = Number(valueGia.value);
    soLuong = Number(valueSoLuong.value);
    duoi50SP = giaSanPham * soLuong;
    tren50SP = (giaSanPham * soLuong) * 0.92;
    // trên 100SP
    soLuongTren100 = soLuong - 100;
    giaSP100 = soLuongTren100 * (giaSanPham * 0.88).toFixed(1);
    tu100SP = ((soLuong - soLuongTren100) * (giaSanPham * 0.92) + giaSP100).toFixed(1);

    if (giaSanPham == 11) {
        showMatHang.textContent = "Sting";
    } else if (giaSanPham == 12) {
        showMatHang.textContent = "Red Bull";
    } else if (giaSanPham == 10) {
        showMatHang.textContent = "Coca Cola";
    } else if (giaSanPham == 9) {
        showMatHang.textContent = "Pepsi";
    }
    if (giaSanPham && soLuong) {
        if (soLuong >= 50 && soLuong < 101) {
            showTotal.textContent = tren50SP + "K";
            showDiscount.textContent = "Bạn được giảm giá 8% cho mỗi sản phẩm, giá của 1 sản phẩm là : " + (giaSanPham * 0.92).toFixed(2) + "K";
        } else if (soLuong > 100) {
            showTotal.textContent = tu100SP + "K";
            showDiscount.textContent = "Bạn được giảm giá 8% cho 100 sản phẩm đầu tiên, giá cho mỗi sản phẩm là : " + (giaSanPham * 0.92).toFixed(2) + "K" + " và sản phẩm từ 101 trở đi có giá là : " + (giaSanPham * 0.88).toFixed(2) + "K";
        } else {
            showTotal.textContent = duoi50SP + "K";
            showDiscount.textContent = "";
        }
    } else {
        alert("Vui lòng điền đầy đủ thông tin")
    }
    showGia.textContent = giaSanPham + "K";
    showSoLuong.textContent = soLuong + " sản phẩm";
}
