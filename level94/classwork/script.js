function processFruits(fruits) {
    let citrus = fruits.slice(1, 3);
    fruits.splice(-2, 2, 'fig');
    let fruitString = fruits.join('-');
    return fruitString;
}

let fruits = ['apple', 'orange', 'lemon', 'banana', 'grape'];
console.log(processFruits(fruits));



let nestedArray = [1, [2, 3], [4, [5, 6]], 7];

let flatArray = nestedArray.flat(1);
let fullyFlatArray = nestedArray.flat(Infinity);

function checkElement(array, value) {
    return array.includes(value);
}

function findIndexOfElement(array, value) {
    return array.indexOf(value);
}

function findLastIndexOfElement(array, value) {
    return array.lastIndexOf(value);
}

console.log(flatArray);
console.log(fullyFlatArray);
console.log(checkElement(fullyFlatArray, 5));
console.log(findIndexOfElement(fullyFlatArray, 4));
console.log(findLastIndexOfElement(fullyFlatArray, 3));