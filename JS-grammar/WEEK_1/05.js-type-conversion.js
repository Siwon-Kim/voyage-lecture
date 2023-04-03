// Type conversion
// 1. Implicit coercion
// 1-1. String
let result1 = 1 + "2";
console.log(result1); // 12
console.log(typeof result1); // string

let result2 = "1" + true;
console.log(result2); // 1true
console.log(typeof result2); // string

// {}, null, undefined + "str" => "str"

// 1-2. Number
let result3 = 1 + "2";
console.log(result3); // -1
console.log(typeof result3); // number

let result4 = "2" * "3";
console.log(result4); // 6
console.log(typeof result4); // number


// 2. Explicit coercion
// 2-1. Boolean
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log("------------"); 
console.log(Boolean("false")); // true
console.log(Boolean({})); // true

// 2-2. String
let result5 = String(123);
console.log(result5); // 123
console.log(typeof result5); // string

let result6 = String(true);
console.log(result6); // true
console.log(typeof result6); // string

let result7 = String(null);
console.log(result7); // null
console.log(typeof result7); // string

let result8 = String(undefined);
console.log(result8); // undefined
console.log(typeof result8); // string

let result9 = String(NaN);
console.log(result9); // NaN
console.log(typeof result9); // string

// 2-3. Number
let result10 = Number("123");
console.log(result10); // 123
console.log(typeof result10); // number
