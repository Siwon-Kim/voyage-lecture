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
