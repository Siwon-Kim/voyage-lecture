// Function
// input, output

// 1. Function Declaration
// function name(param1, param2) { body... return; }
function add(a, b) {
	return a + b;
}

// 2. Function Expression
// const name = function(param1, param2) { body... return; }
let add2 = function(a, b) {
    return a + b;
}

console.log(add(1, 3)); // 4
let funcResult = add2(1, 3);
console.log(funcResult); // 4