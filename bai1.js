var valueName = rutGon("#nhanvien");
var valueHour = rutGon("#giolamviec");
var getLuong = rutGon(".btn");
var showNV = rutGon(".show_nv");
var showGioLuong = rutGon(".show_gioluong");
var showOT = rutGon(".show_ot");
var showDes = rutGon(".chuthich");
var showTotal = rutGon(".show_total");
var changeBG = rutGon("#show_result");
// ----------DOM-----------
getLuong.addEventListener("click", tinhLuong);

function rutGon(dom) {
    return document.querySelector(dom);
}


function tinhLuong() {
    var tenNV = valueName.value;
    var gioLamViec = valueHour.value;
    var luong1Gio = 100;
    var luongCoBan = luong1Gio * gioLamViec;
    var gioOT = gioLamViec - 40;
    var luongOT1h = luong1Gio * 1.5;
    var luongOT = luongOT1h * gioOT;

    if (tenNV && gioLamViec) {
        if (gioLamViec <= 40) {
            showOT.textContent = "Tuần này bạn không OT";
            showTotal.textContent = luongCoBan + "K";
            showDes.textContent = `*Lương được tính theo "Số giờ làm" x "Giá tiền mỗi giờ"`;
        } else {
            showOT.textContent = `Tuần này bạn đã OT được ${gioOT} giờ `;
            showTotal.textContent = (gioLamViec - gioOT)*luong1Gio + luongOT + "K";
            showDes.textContent = `*Lương OT được tính theo hệ số "Lương cơ bản" x1.5`;
        }
        showNV.textContent = tenNV;
        showGioLuong.textContent = `${gioLamViec} giờ`;
        changeBG.style.backgroundImage = "url('https://i.gifer.com/2r5w.gif')";
    } else {
        alert("Điền thông tin vào mày");
    }
}
