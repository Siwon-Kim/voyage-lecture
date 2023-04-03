// 5. Property Shorthand
// if the key and value are the same, we can use the shorthand
const name = "John";
const age = 30;

const obj = {
	name, // if name: name, we can use name only
	age: age,
};

const obj2 = { name, age }; // RHS is still the object

// 6. Spread Operator
// Most frequently used with destructuring in ES6
// Spread operator is used to split up array elements or object properties
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(...arr); // 1 2 3 4 5 - removing [] and spread out the elements

let newArr = [...arr, 6, 7, 8];
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8]

let person = {
	name: "John",
	age: 30,
};

let person1 = { ...person }; // removing {} and spread out the key-value pairs
console.log(person1); // { name: 'John', age: 30 }

// 7. Rest Parameter
// Rest parameter is used to represent an indefinite number of arguments as an array
// Rest parameter must be the last parameter in a function
function exampleFunc(a, b, c, ...args) {
	console.log(a, b, c); // 1 2 3
	console.log(...args); // 4 5 6 7 8 9 10
	console.log(args); // [4, 5, 6, 7, 8, 9, 10]
}

exampleFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 1 2 3

// 8. Template Literals
// Template literals are string literals allowing embedded expressions
// Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes
let name1 = "Siwon";
let age1 = 22;

console.log(`Hello, my name is ${name1}. I am ${age1} years old.`);

// supporting multi-line
console.log(`
    Hello, 
        my name is ${name1}.
        I am ${age1} years old.
`);


// 9. named export vs default export
// default export
// name.js
const Name = () => {
}

export default Name

// Under other files 
// we can use any names to import:
// import newName from "name.js"
// import NameFromOtherModule from "name.js"

// named export
// we can export multiple functions/classes in one file

export const Name1 = () => {
}

export const Name2 = () => {
}

// Under other files
import {Name1, Name2} from "name.js"
import {newName} from "name.js" // x

// use alias to import in different names
import {Name1 as newName, Name2} from "name.js"

// use * to import like default export
import * as NameModule from "name.js"

console.log(NameModule.Name1)
