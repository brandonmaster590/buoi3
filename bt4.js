//Bài 4: Kiểm Tra Đăng Nhập
let username = prompt("Nhập username: ");
let password = prompt("Nhập password: ");

if (username === "admin" && password === "123") {
    console.log("Đăng nhập thành công");
} else {
    console.log("Sai thông tin đăng nhập");
}
