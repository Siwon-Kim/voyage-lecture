// forEach, map, filter, find

let numbers = [1, 2, 3, 4, 5];

// 1. forEach
// forEach(callback(currentValue, index, array), thisArg)
// callback: function to execute on each element (inserting the function in the parameter's position)
// currentValue: the current element being processed in the array
// index: the index of the current element being processed in the array
// array: the array forEach() was called upon
// thisArg: value to use as this when executing callback
numbers.forEach(function (number, index, array) {
    console.log(number, index, array);
});


// 2. map
// map(callback(currentValue, index, array), thisArg)
// always return a new array
// always return the same length as the original array
let newNumbersArr = numbers.map(function (number, index, array) {
    return number * 2; // if no return statement, it will return undefined
});

console.log(newNumbersArr); // [2, 4, 6, 8, 10]


// 3. filter
// filter(callback(currentValue, index, array), thisArg)
// always return a new array
// always return the same length or less than the original array
let filteredNumersArr = numbers.filter(function (number, index, array) {
    return number > 3; // condition to filter
});

console.log(filteredNumersArr); // [4, 5]


// 4. find
// find(callback(currentValue, index, array), thisArg)
// always return a single element
// always return only the first element that satisfies the condition
let foundNumber = numbers.find(function (number, index, array) {
    return number > 3; // condition to find
});

console.log(foundNumber); // 4