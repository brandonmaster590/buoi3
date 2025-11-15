//Bài 3: Máy Tính BMI
let weight = Number(prompt("Nhập cân nặng (kg): "));
let height = Number(prompt("Nhập chiều cao (m): "));

let BMI = weight / (height * height);

if (BMI < 18.5) {
    console.log("Gầy");
} else if (BMI >= 25) {
    console.log("Béo");
} else {
    console.log("Bình thường");
}

console.log(BMI);
