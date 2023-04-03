// Statement
// if, else if, else, and switch

// 1. if
// if (condition) { body... }
if (x < 0) {
    console.log("x is negative");
}

let y = "Hello World"
if (y.length > 5) {
    console.log("y is longer than 5");
}

// 2. if else
// if (condition) { body... }
// else { body... }
if (x < 0) {
    console.log("x is negative");
} else {
    console.log("x is positive");
}

// 3. if else if else
// if (condition) { body... }
// else if (condition) { body... }
// else { body... }
if (x < 0) {
    console.log("x is negative");
} else if (x > 0) {
    console.log("x is positive");
} else {
    console.log("x is zero");
}

// 4. switch
// switch (key) {
//     case value:
//         body...
//         break;
//     case value:
//         body...
//         break;
//     default:
//         body...
//         break;
// }

let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
