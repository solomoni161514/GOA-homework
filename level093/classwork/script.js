let fruits = ['apple', 'orange', 'lemon', 'banana', 'grape']
let citrus = fruits.slice(1, 3);
fruits.splice(-2, 2, 'fig');
let fruitString = fruits.join('-');
console.log(fruits);
console.log(citrus);
console.log(fruitString);


// function processFruits(fruits) {
//     let citrus = fruits.slice(1, 3);
//     fruits.splice(-2, 2, 'fig');
//     let fruitString = fruits.join('-');
//     return fruitString;
// }

// let fruits = ['apple', 'orange', 'lemon', 'banana', 'grape'];
// let result = processFruits(fruits);
// console.log(result);