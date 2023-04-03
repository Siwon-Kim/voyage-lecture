// 2. string
let str = "Hello World";
console.log(str); // Hello World
console.log(typeof str); // string

// 2-1. string length
console.log(str.length); // 11

// 2-2. string concatenation
let str1 = "Hello, ";
let str2 = "World";
let result = str1.concat(str2); // Hello, World

// 2-3. string slicing 
let str3 = "Hello, World";
console.log(str3.substring(7, 5)); // World (start, index)
console.log(str3.slice(7, 12)); // World (start, end)

// 2-4. string search   
let str4 = "Hello, World";
console.log(str4.search("World")); // 7

// 2-5. string replace
let str5 = "Hello, World";
console.log(str5.replace("World", "JS")); // Hello, JS

// 2-6. string split
let str6 = "Hello, World";
let result1 = str6.split(","); // ["Hello", "World"]