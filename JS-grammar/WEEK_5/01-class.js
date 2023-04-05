// Class - blueprint
class Person {
	// Constructor - necessity (noun)
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	// Method - optional (verb)
	sayHello() {
		console.log(`Hello, my name is ${this.name}.`);
	}

	sayAge() {
		console.log(`I am ${this.age} years old.`);
	}
}

// Instance - actual object
const person1 = new Person("John", 30);
const person2 = new Person("Mary", 25);

person1.sayHello();
person1.sayAge();

person2.sayHello();
person2.sayAge();