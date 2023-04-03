// 4. Destructuring
// Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Array Destructuring
let [value1, value2] = [1, "new"];
console.log(value1); // 1
console.log(value2); // "new"

let arr = ["value1", "value2", "value3"];
let [a, b, c, d] = arr;
console.log(a); // "value1"
console.log(b); // "value2"
console.log(c); // "value3"
console.log(d); // undefined

[a, b, c, d = 4] = arr; // set default value
console.log(d); // 4

// Object Destructuring
let user = {
	name: "John",
	age: 30,
};
let { name, age, birth="today" } = user;
console.log("name =>", name); // "John"
console.log("age =>", age); // 30 
console.log("birth =>", birth); // "today"

// Destructuring Assignment
let { name: newName, age: newAge } = user;
console.log("newName =>", newName); // "John"
console.log("newAge =>", newAge); // 30
