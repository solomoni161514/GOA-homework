let x = 1;

for (let i = 1; i <= 10000; i++) {
    x *= i;

    if (x > 10000) {
        break;
    }
}

console.log(x);



for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    if (i === 15) {
        break;
    }
    console.log(i);
}


for (let i = 1; i <= 100; i++) {
    if (i === 50) {
        break;
    }
    if (i % 4 !== 0) {
        continue;
    }
    console.log(i);
}