// Function as First-Class object => function as very flexible in JS

// 1. Assign function to variable
const sayHello = function () {
	console.log("Hello");
};

// 2. Pass function as parameter
// callback function = function as parameter: sayHello
// higher-order function = function that takes function as parameter: callFunction
function callFunction(func) {
	func();
}

callFunction(sayHello); // Hello

// 3. Return function from function
function createAdder(num) {
	return function (x) {
		return x + num;
	};
}

const addFive = createAdder(5);
console.log(addFive(10)); // 15

// 4. Function as property of object
const person = {
	name: "John",
	age: 31,
	isMarrid: true,
	sayHello: () => {
		console.log(`Hello, my name is ${this.name}`); // this.name = undefined
	},
	sayHello1: function () {
		console.log(`Hello, my name is ${this.name}`);
	},
};

person.sayHello(); // Hello, my name is undefined: arrow function does not have 'this' keyword
person.sayHello1(); // Hello, my name is John

// 5. Function as property of array
const myArr = [
	function (a, b) {
		return a + b;
	},
	function (a, b) {
		return a - b;
	},
];

console.log(myArr[0](1, 2)); // 3
console.log(myArr[1](1, 2)); // -1

console.log("====================================");

function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2); // efficient way by reusing multiplyBy function
const multiplyByThree = multiplyBy(3);

console.log(multiplyByTwo(5)); // 10
console.log(multiplyByThree(5)); // 15

const result = add(multiplyByTwo(5), multiplyByThree(5));
console.log(`Result: ${result}`); // 25