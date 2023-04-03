// Scope: global, local, arrow function

let a = 10; // Global scope
function myFunc() {
	let b = 20; // Local scope
	console.log(a); // 10
	console.log(b); // 20
}

// Arrow function
// ES6 New feature
// const name = (param1, param2) => { body... return; }
function add(x, y) {
	return x + y;
}

// 1-1. basic arrow function
let arrowFunc1 = (x, y) => {
	return x + y;
};

// 1-2. in a sigle line
let arrowFunc2 = (x, y) => x + y;
