let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];


let concatArray = array1.concat(array2);

concatArray.copyWithin(concatArray.length - 2, 0, 2);

concatArray.fill(0, concatArray.length - 3);

let lastElement = concatArray.pop();

let firstElement = concatArray.shift();

concatArray.unshift(10, 20);



function modifyArray(arr1, arr2) {
    let concatArray = arr1.concat(arr2);
    concatArray.copyWithin(concatArray.length - 2, 0, 2);
    concatArray.fill(0, concatArray.length - 3);
    let lastElement = concatArray.pop();
    let firstElement = concatArray.shift();
    concatArray.unshift(10, 20);
}

console.log(modifyArray(arr1, arr2));