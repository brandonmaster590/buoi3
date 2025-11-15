//Bài 1: Tính Hóa Đơn Mua Sắm
let price = Number(prompt("Nhập giá sản phẩm: "));
let quantity = Number(prompt("Nhập số lượng: "));

let total = price * quantity;
total -= total * 0.1;   // giảm giá 10%
total += total * 0.05;  // thuế VAT 5%

console.log("Tổng hóa đơn phải trả: " + total+ " VND");