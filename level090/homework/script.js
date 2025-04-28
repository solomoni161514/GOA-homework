let array = [42, 3.14, "hello", true, null, [1, 2, 3], {key: 'value'}, (4, 5), new Set([9, 10]), new Uint8Array([1, 2, 3])];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

array[5] = "new list";
array[6] = "new object";
array[7] = "new tuple";
array[8] = "new set";
array[9] = "new typed array";

console.log(array);