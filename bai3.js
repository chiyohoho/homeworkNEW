var valueTenHocSinh = rutGon("#tenhocsinh");
var valueDiemToan = rutGon("#diem_toan");
var valueDiemLy = rutGon("#diem_ly");
var valueDiemHoa = rutGon("#diem_hoa");

var showTen = rutGon(".show_ten");
var showDiemTB = rutGon(".show_diemtb");
var showHocLuc = rutGon(".show_hocluc");
var showHocLai = rutGon(".show_hoclai");

var submitDaiHoc = rutGon("#submit_totnghiep")
var layKetQua = rutGon("#submit_ketqua");

layKetQua.addEventListener("click", showKetQua);
submitDaiHoc.addEventListener("click", ketQuaTotNghiep)

function rutGon(tenThe) {
    return document.querySelector(tenThe);
}

function showKetQua() {
    var tb3Mon = dieuKien(valueTenHocSinh, valueDiemToan, valueDiemLy, valueDiemHoa);
    kiemTraHocLuc(tb3Mon)
    return tb3Mon;
}

function dieuKien(hocsinh, toan, ly, hoa) {
    var tenHocSinh = hocsinh.value;
    var diemToan = Number(toan.value);
    var diemLy = Number(ly.value);
    var diemHoa = Number(hoa.value);

    if (tenHocSinh && diemToan && diemLy && diemHoa) {
        var tb3Mon = (diemToan + diemLy + diemHoa) / 3;
        showTen.textContent = tenHocSinh;
        showDiemTB.textContent = tb3Mon.toFixed(2);
        return tb3Mon;
    } else {
        alert("Nhập thông tin vào bạn ei")
    }
}

function kiemTraHocLuc(tb3Mon) {
    if (tb3Mon && tb3Mon >= 6.5 && tb3Mon < 8) {
        showHocLuc.textContent = "Khá";
    } else if (tb3Mon >= 8) {
        showHocLuc.textContent = "Giỏi";
    } else {
        if (tb3Mon >= 5 && tb3Mon < 6.5) {
            showHocLuc.textContent = "Trung Bình";
        } else {
            showHocLuc.textContent = "Yếu";
        }
    }
}

function ketQuaTotNghiep() {
    var ketQuaTotNghiep = showKetQua();
    if (ketQuaTotNghiep) {
        if (ketQuaTotNghiep >= 6.5) {
            alert("Chúc mừng bạn đã tốt nghiệp")
        } else {
            alert("Năm sau thi lại nha")
        }
    } else {
        alert("kiểm tra điểm 3 môn rồi kiểm tra tốt nghiệp nha")
    }
}



// // function cua 1A
// function showKetQua() {
//     var ketQua = kiemTraDuLieuHople(tenHocSinh, diemHoa, diemLy, diemToan) //1
//     kiemTraHocLuc(ketQua) //2
//     return ketQua;
// }

// //Function cua 1
// function kiemTraDuLieuHople(ten, hoa, ly, toan) {
//     var giaTriTen = ten.value;
//     var diemToan = Number(toan.value);
//     var diemLy = Number(ly.value);
//     var diemHoa = Number(hoa.value);

//     if (giaTriTen && diemToan && diemLy && diemHoa) {
//         var ketQua = (diemToan + diemLy + diemHoa) / 3;
//         showTen.textContent = giaTriTen;
//         showDiemTB.textContent = ketQua;
//         return ketQua
//     } else {
//         alert("vui long nhap du thong tin")
//     }
// }

// // Function cua 2
// function kiemTraHocLuc(ketQua) {
//     if (ketQua && ketQua > 6.5 && ketQua < 8) {
//         showHocLuc.textContent = "Kha"
//     } else if (ketQua >= 8) {
//         showHocLuc.textContent = "Gioi"
//     } else {
//         if (ketQua) {
//             showHocLuc.textContent = "trung Binh"
//         } else {
//             showHocLuc.textContent = ""
//         }
//     }
// }

// function showKetQuaTrungTuyen() {
//     var diem = showKetQua() //1A
//     if (diem && diem >= 5) {
//         alert("dau dai hoc")
//     } else {
//         alert("Chuc ban may man lan sau")
//     }
// }

// layKetQua.addEventListener("click", showKetQua)
// submitDaiHoc.addEventListener("click", showKetQuaTrungTuyen)


















// layKetQua.addEventListener("click", showKetQua);

// function showKetQua() {
//     var pointToan = diemToan.value;
//     var pointLy = diemLy.value;
//     var pointHoa = diemHoa.value;

//     var tb3Mon = (Number(pointToan)+Number(pointLy)+Number(pointHoa))/3;
//     var lamTronDiem = tb3Mon.toFixed(2);

//     if (tb3Mon >= 8.5) {
//         showTen.textContent = tenHocSinh.value;
//         showDiemTB.textContent = lamTronDiem;
//         showHocLuc.textContent = "Giỏi";
//         showHocLuc.style.color = "blue";
//     } else if ((tb3Mon < 8.5) && (tb3Mon >= 6.5)) {
//         showTen.textContent = tenHocSinh.value;
//         showDiemTB.textContent = lamTronDiem;
//         showHocLuc.textContent = "Khá";
//         showHocLuc.style.color = "orange";
//     } else if ((tb3Mon < 6.5) && (tb3Mon >= 5)) {
//         showTen.textContent = tenHocSinh.value;
//         showDiemTB.textContent = lamTronDiem;
//         showHocLuc.textContent = "Trung Bình";
//         showHocLuc.style.color = "black";
//     } else {
//         showTen.textContent = tenHocSinh.value;
//         showDiemTB.textContent = lamTronDiem;
//         showHocLuc.textContent = "Yếu";
//         showHocLuc.style.color = "red";
//         showHocLai.textContent = "Hè đi học lại nha em";
//     }
// }

// function showKetQua(pToan, pLy, pHoa) {
//     var pointToan = Number(pToan);
//     var pointLy = Number(pLy);
//     var pointHoa = Number(pHoa);

//     var tb3Mon = (pointToan+pointLy+pointHoa)/3;
//     console.log("tb3Mon:", tb3Mon);
//     var lamTronDiem = tb3Mon.toFixed(2);

//     if (tb3Mon >= 8.5) {
//         showTen.textContent = tenHocSinh.value;
//         showDiemTB.textContent = lamTronDiem;
//         showHocLuc.textContent = "Giỏi";
//         showHocLuc.style.color = "blue";
//     } else if ((tb3Mon < 8.5) && (tb3Mon >= 6.5)) {
//         showTen.textContent = tenHocSinh.value;
//         showDiemTB.textContent = lamTronDiem;
//         showHocLuc.textContent = "Khá";
//         showHocLuc.style.color = "orange";
//     } else if ((tb3Mon < 6.5) && (tb3Mon >= 5)) {
//         showTen.textContent = tenHocSinh.value;
//         showDiemTB.textContent = lamTronDiem;
//         showHocLuc.textContent = "Trung Bình";
//         showHocLuc.style.color = "black";
//     } else {
//         showTen.textContent = tenHocSinh.value;
//         showDiemTB.textContent = lamTronDiem;
//         showHocLuc.textContent = "Yếu";
//         showHocLuc.style.color = "red";
//         showHocLai.textContent = "Hè đi học lại nha em";
//     }
// }

// showKetQua(diemToan.value, diemLy.value, diemHoa.value);