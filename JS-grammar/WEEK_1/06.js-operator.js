// Operator
// +, -, *, /, %
// =, +=, -=, *=, /=, %=
// ==, ===, !=, !==, >, <, >=, <=
// &&, ||, !


// 1. Arithmetic Operator
// 1-1. Addition
console.log(1 + 2); // 3
console.log("1" + "2"); // 12

// 1-2. Subtraction
console.log(1 - 2); // -1
console.log("1" - "2"); // -1

// 1-3. Multiplication
console.log(1 * 2); // 2
console.log("1" * "2"); // 2

// 1-4. Division
console.log(1 / 2); // 0.5
console.log("1" / "2"); // 0.5

// 1-5. Remainder
console.log(1 % 2); // 1
console.log("1" % "2"); // 1


// 2. Assignment Operator
// 2-1. =
let x = 10;

// 2-2. +=
x += 5; // x = x + 5
console.log(x); // 15

// 2-3. -=
x -= 5; // x = x - 5
console.log(x); // 10

// 2-4. *=
x *= 5; // x = x * 5
console.log(x); // 50

// 2-5. /=
x /= 5; // x = x / 5
console.log(x); // 10

// 2-6. %=
x %= 5; // x = x % 5
console.log(x); // 0


// 3. Comparison Operator
// 3-1. ==
console.log(1 == 1); // true
console.log(1 == "1"); // true

// 3-2. === strict equality
console.log(1 === 1); // true
console.log(1 === "1"); // false

// 3-3. !=
console.log(1 != 1); // false
console.log(1 != "1"); // false

// 3-4. !== strict inequality
console.log(1 !== 1); // false
console.log(1 !== "1"); // true

// 3-5. >
console.log(1 > 1); // false
console.log(1 > "1"); // false

// 3-6. <
console.log(1 < 1); // false
console.log(1 < "1"); // false

// 3-7. >=
console.log(1 >= 1); // true
console.log(1 >= "1"); // true

// 3-8. <=
console.log(1 <= 1); // true
console.log(1 <= "1"); // true


// 4. Logical Operator
// 4-1. &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 4-2. ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 4-3. !
console.log(!true); // false
console.log(!false); // true


// 5. Terenary Operator
let a = 10;
let result = a > 5 ? "greater than 5" : "less than 5";
console.log(result);

let b = 20;
let result1 = b < 10 ? "less than 10" : "greater than 10";
console.log(result1);


// 6. Type Operator
// 6-1. typeof
console.log(typeof 1); // number
console.log(typeof "1"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function() {}); // function