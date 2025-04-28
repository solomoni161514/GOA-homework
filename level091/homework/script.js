function getArrayLength(arr) {
    return arr.length;
}


function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}


function pushValueToArray(arr, value) {
    return arr.push(value);
}



function concatenateAndPush(arr1, arr2, value) {
    let newArray = arr1.concat(arr2);
    newArray.push(value);
    return newArray;
}

function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


function getEvenIndexedElements(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i += 2) {
        newArray.push(arr[i]);
    }
    return newArray;
}


function getStringLengths(arr) {
    let lengths = [];
    for (let i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);
    }
    return lengths;
}