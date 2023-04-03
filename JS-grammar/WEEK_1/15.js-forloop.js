// for loop

// 1. for
// for (initialization; condition; final-expression) { body... }
for (let i = 0; i < 10; i++) {
    console.log(i);
}

const arr = ["one", "two", "three", "four", "five"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2. for in
// for (key in object) { body... }
let person = {
    name: "John",
    age: 30,
    isMarried: true,
}
for (let key in person) {
    console.log("Key:", person[key]);
}