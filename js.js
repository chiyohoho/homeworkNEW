// -----DOM VALUE
var valueSoBaoDanh = rutGon("#sobaodanh");
var valueTenThiSinh = rutGon("#tenthisinh");
var valueDoiTuong = rutGon("#doituong");
// -----DOM ĐIỂM
var valueDiemToan = rutGon("#diemtoan");
var valueDiemVan = rutGon("#diemvan");
var valueDiemAnh = rutGon("#diemanh");
var getKetQua = rutGon(".btn");
// -----DOM % Điểm
var percentToan = rutGon(".progress_toan");
var percentVan = rutGon(".progress_van");
var percentAnh = rutGon(".progress_anh");
var percentTB = rutGon(".progress_tb");
var toanShow = rutGon(".diemtoan_show");
var vanShow = rutGon(".diemvan_show");
var anhShow = rutGon(".diemanh_show");
var tbShow = rutGon(".diemtb_show");
// -----DOM Show Kết Quả 
var showKQ1 = rutGon(".show_ketqua1");
var showKQ2 = rutGon(".show_ketqua2");
var showKQ3 = rutGon(".show_ketqua3");
var showKQ4 = rutGon(".show_ketqua4");
// -----DOM Background
var addBG = rutGon("#addbg");

getKetQua.addEventListener("click", showKetQua);


function rutGon(tenThe) {
    return document.querySelector(tenThe)
}

function showKetQua() {
    var SBD = valueSoBaoDanh.value;
    var TDT = valueTenThiSinh.value;
    var DT = valueDoiTuong.value;
    var pToan = valueDiemToan.value;
    var pVan = valueDiemVan.value;
    var pAnh = valueDiemAnh.value;
    if (SBD && TDT && DT && pToan && pVan && pAnh) {
        var diemTB = layDiemTB(pToan, pVan, pAnh);
        var bonusDoiTuong = loaiDoiTuong(DT)
        var stringDoiTuong = quyDoiLoaiDoiTuong(DT)
        var afterBonus = diemTB + bonusDoiTuong;
        var xepLoaiHL = xepLoai(afterBonus);

        var doiTuong = {
            soBD: "",
            tenDT: "",
            loaiDT: "",
            toanDT: "",
            vanDT: "",
            anhDT: "",
            diemtbDT: "",
            xeploaiDT: "",
        }

        doiTuong.soBD = SBD;
        doiTuong.tenDT = TDT;
        doiTuong.loaiDT = stringDoiTuong;
        doiTuong.toanDT = pToan;
        doiTuong.vanDT = pVan;
        doiTuong.anhDT = pAnh;
        doiTuong.diemtbDT = afterBonus;
        doiTuong.xeploaiDT = xepLoaiHL;

        showDoiTuongHTML(doiTuong)
    } else {
        alert("vui lòng nhập đầy đủ thông tin")
    }
}

function layDiemTB(toan, van, anh) {
    var diemToan = Number(toan);
    var diemVan = Number(van);
    var diemAnh = Number(anh);

    var tb3Mon = (diemToan + diemVan + diemAnh) / 3;
    return tb3Mon;
}

function xepLoai(tb3Mon) {
    var xepLoaiHocLuc;
    if (tb3Mon >= 8.5) {
        xepLoaiHocLuc = "Giỏi"
        addBG.style.backgroundImage = "url(https://thumbs.gfycat.com/SimplisticWarmAlligatorsnappingturtle-size_restricted.gif)";
        addBG.style.scale = "1";
        addBG.style.left = "70%";
        addBG.style.top = "20%";
    } else if (tb3Mon >= 6.5 && tb3Mon < 8.5) {
        xepLoaiHocLuc = "Khá"
        addBG.style.backgroundImage = "url(https://media.tenor.com/GcHGPM7wmaoAAAAC/aaaaaaaaaaaaaa.gif)";
        addBG.style.scale = "0.8";
        addBG.style.left = "68%";
        addBG.style.top = "-7%";
    } else if (tb3Mon >= 5 && tb3Mon < 6.5) {
        xepLoaiHocLuc = "Trung Bình";
        addBG.style.backgroundImage = "url(https://i.pinimg.com/originals/c0/12/dd/c012dd6e30c2d6a9925a69af3891960d.gif)";
        addBG.style.scale = "0.5";
        addBG.style.left = "52%";
        addBG.style.top = "0";
    } else {
        xepLoaiHocLuc = "Yếu"
        addBG.style.backgroundImage = "url(https://64.media.tumblr.com/487c049160d6b0f984f46500b49ff5af/tumblr_mx4ghwo9te1qe3cv4o1_250.gif)";
        addBG.style.scale = "1";
        addBG.style.left = "78%";
        addBG.style.top = "24%";
    }
    return xepLoaiHocLuc;
}

function loaiDoiTuong(doiTuongPhanLoai) {
    var diemBonus;
    if (doiTuongPhanLoai == 0) {
        alert("Vui lòng chọn 1 loại đối tượng")
    } else if (doiTuongPhanLoai == 1) {
        diemBonus = 1;
        showKQ3.textContent = "Thí sinh thuộc nhóm đối tượng 1 nên được +1 điểm vào điểm TB";
    } else if (doiTuongPhanLoai == 2) {
        diemBonus = 2;
        showKQ3.textContent = "Thí sinh thuộc nhóm đối tượng 2 nên được +2 điểm vào điểm TB";
    } else if (doiTuongPhanLoai == 3) {
        diemBonus = 0;
        showKQ3.textContent = "Bạn không thuộc vào nhóm đối tượng nào";
    } else {
        diemBonus = 99;
        showKQ3.textContent = "VL Wibu, đậu luôn khỏi thi cử gì hết";
    }
    return diemBonus;
}

function quyDoiLoaiDoiTuong(doituong) {
    var stringDoiTuong;
    if (doituong == 1) {
        stringDoiTuong = "Thí sinh này thuộc diện có hoàn cảnh khó khăn"
    } else if (doituong == 2) {
        stringDoiTuong = "Thí sinh này thuộc diện con thương binh/liệt sĩ, có công với cách mạng"
    } else if (doituong == 3) {
        stringDoiTuong = "Thí sinh này không thuộc bất kỳ diện ưu tiên nào"
    } else if (doituong == 4) {
        stringDoiTuong = "Thí sinh này là Wibu, cho đậu luôn khỏi xét điểm"
    }
    return stringDoiTuong;
}

function showDoiTuongHTML(doiTuong) {
    var monToan = doiTuong.toanDT * 10 + "%";
    var monVan = doiTuong.vanDT * 10 + "%";
    var monAnh = doiTuong.anhDT * 10 + "%";
    var monTB = doiTuong.diemtbDT * 10 + "%";

    percentToan.style.width = monToan;
    percentVan.style.width = monVan;
    percentAnh.style.width = monAnh;
    percentTB.style.width = monTB;

    toanShow.textContent = doiTuong.toanDT + " Điểm";
    vanShow.textContent = doiTuong.vanDT + " Điểm";
    anhShow.textContent = doiTuong.anhDT + " Điểm";
    tbShow.textContent = (doiTuong.diemtbDT).toFixed(2) + " Điểm";

    showKQ1.textContent = "Thí sinh: " + doiTuong.tenDT;
    showKQ2.textContent = "Có số báo danh: " + doiTuong.soBD;
    showKQ4.textContent = "Kết quả học lực: " + doiTuong.xeploaiDT;
}
