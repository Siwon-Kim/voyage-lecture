function solution(s) {
    return Number(s)
}

// Number() vs. parseInt()
// Number(valueString): can convert the negative values too with - sign
// parseInt(string, radix): tries to convert the value to the last character that could be converted to an integer

let string = '10.6 objects'
console.log(parseInt(string)); // 10
console.log(Number(string));   // NaN

let string1 = '3.142592'
console.log(parseInt(string1)); // 3
console.log(Number(string1));   // 3.142592

let string2 = '1100'
console.log(parseInt(string2, 2)); // 12
console.log(Number(string2));   // 1100

