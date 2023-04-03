// if statements nesting
let age = 20;
let gender = "M";
if (age >= 18) {
    console.log("Adult");
    if (gender === "W") {
        console.log("Female");
    } else {
        console.log("Male");
    }
} else {
    console.log("Child");
    if (gender === "W") {
        console.log("Female");
    } else {
        console.log("Male");
    }
}


// another way to use if statements 
let x = 10;
if (x > 0) {
    console.log("x is positive");
}

x > 0 && console.log("x is positive");


// Ternary Operator & Short-circuit Evaluation
let y; // undefined
let z = y || 10; // if y is undefined, z = 10
console.log(z); // 10