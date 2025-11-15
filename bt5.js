//Bài 5: Kiểm Tra Năm Nhuận
let year = Number(prompt("Nhập năm: "));

if (year > 0 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
    console.log("Năm nhuận");
} else {
    console.log("Không phải năm nhuận");
}
