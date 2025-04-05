function comprehensiveArrayTask(arr1, arr2, arr3) {
    let mergedArray = arr1.concat(arr2);
    mergedArray.copyWithin(5, 0, 3);
    mergedArray.fill(0, 6);
    mergedArray.pop();
    mergedArray.shift();
    mergedArray.unshift(100, 200);
    mergedArray.splice(2, 2, ...arr3);
    let slicedArray = mergedArray.slice(-5);
    let resultString = slicedArray.join(',');
    return resultString;
}


function manipulateArrayOfObjects() {
    let people = [{ name: 'Alice' }, { name: 'Bob' }];
    let places = [{ city: 'Paris' }, { city: 'London' }];

    let mergedArray = people.concat(places);
    mergedArray.copyWithin(2, 0, 2);
    mergedArray.fill({ city: 'New York' }, -2);
    mergedArray.pop();
    mergedArray.shift();
    mergedArray.unshift({ name: 'Charlie' }, { name: 'David' });

    return mergedArray;
}

console.log(manipulateArrayOfObjects());



function manipulateMixedArray() {
    let mixedArray = [1, 'two', 3, 'four'];
    let extendedArray = mixedArray.concat([true, false]);

    extendedArray.copyWithin(0, 2, 4);
    extendedArray.fill(0, 5, 8);
    extendedArray.pop();
    extendedArray.shift();
    extendedArray.unshift(null, undefined);

    return extendedArray;
}

console.log(manipulateMixedArray());