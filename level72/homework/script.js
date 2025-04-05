let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));
if (number % 2 === 0) {
    console.log(`${number} არის ლუწი.`);
} else {
    console.log(`${number} არის კენტი.`);
}

let temperature = parseFloat(prompt("შეიყვანეთ ტემპერატურა ცელსიუსში:"));
if (temperature < 10) {
    console.log("ტემპერატურა ცივია.");
} else if (temperature <= 25) {
    console.log("ტემპერატურა ზომიერია.");
} else {
    console.log("ტემპერატურა ცხელია.");
}

let score = parseInt(prompt("შეიყვანეთ ქულა (0-100):"));
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score <= 89) {
    grade = "B";
} else if (score >= 70 && score <= 79) {
    grade = "C";
} else if (score >= 60 && score <= 69) {
    grade = "D";
} else if (score >= 0 && score <= 59) {
    grade = "F";
} else {
    grade = "არასწორი ქულა!";
}
console.log(`თქვენი შეფასებაა: ${grade}`);
