let nestedArray = [1, 2, [3, 4], 5, [6, 7]];
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
console.log(checkElement(nestedArray, 3));
console.log(findIndexOfElement(nestedArray, 3));
console.log(findLastIndexOfElement(nestedArray, 3));
console.log(nestedArray);