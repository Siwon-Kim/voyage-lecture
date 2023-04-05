// Constructor
function Person(name, age) {
	this.name = name; // public
	let _age = age; // private

	// Instance Method
	// Thus, everytime Person object is created, it create duplicates
	// : Solution -> prototype
	this.sayHi = function () {
		console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
	};
}

const me = new Person("Choi", 33);
me.sayHi(); // Hi!, My name is Choi. I am 33.
console.log(me.name); // Choi
console.log(me._age); // undefined

const you = new Person("Lee", 30);
you.sayHi(); // Hi! My name is Lee. I am 30.
console.log(you.name); // Lee
console.log(you.age); // undefined
