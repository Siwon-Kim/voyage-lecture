// Array

// 1. Declaration
// 1-1. Basic
let fruits = ["apple", "banana", "orange"];
console.log(fruits);


// 1-2. Fixed size
let number = new Array(5); // empty array with size 5
console.log(number.length); // 5


// 2. Access
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange


// 3. Array methods
// 3-1. push: add an item to the end
fruits.push("kiwi");
console.log(fruits); // ["apple", "banana", "orange", "kiwi"]

// 3-2. pop: remove an item from the end
fruits.pop();
console.log(fruits); // ["apple", "banana", "orange"]

// 3-3. unshift: add an item to the beginning
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "apple", "banana", "orange"]

// 3-4. shift: remove an item from the beginning
fruits.shift();
console.log(fruits); // ["apple", "banana", "orange"]

// 3-5. splice: remove an item by index position
fruits.push("kiwi");
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "orange", "kiwi", "mango"]
fruits.splice(1, 1); // remove 1 item from index 1 (start, count)
console.log(fruits); // ["apple", "orange", "kiwi", "mango"]
fruits.splice(1, 1, "strawberry", "peach"); // remove 1 item from index 1 and add 2 items (start, count, item1, item2)
console.log(fruits); // ["apple", "strawberry", "peach", "kiwi", "mango"]

// 3-6. slice: copy an array
let fruits2 = fruits.slice(); // copy all items
console.log(fruits2); // ["apple", "strawberry", "peach", "kiwi", "mango"]
let fruits3 = fruits.slice(1, 2); // copy from index 1 to index 2 (start, end)
console.log(fruits3); // ["strawberry"]

