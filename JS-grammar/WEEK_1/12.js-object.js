// Object
// key-value pair
// we can put multiple data in one object

// 1. create object
// 1-1. object literal
let person = {
	name: "John",
	age: 30,
	gender: "M",
};

// 1-2. object constructor
function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

let person1 = new Person("John", 30, "M");
let person2 = new Person("Jane", 25, "F");

// 2. access object
console.log(person.name);
console.log(person.age);
console.log(person.gender);


// 3. object method
let person3 = {
	name: "John",
	age: 30,
	gender: "M",
};

// 3-1. Object.key(): get all keys of an object
let keys = Object.keys(person3);
console.log(keys); // ['name', 'age', 'gender']

// 3-2. Object.values(): get all values of an object
let values = Object.values(person3);
console.log(values); // ['John', 30, 'M']

// 3-3. Object.entries(): get all key-value pairs of an object (2-demensional array)
let entries = Object.entries(person3);
console.log(entries); // [['name', 'John'], ['age', 30], ['gender', 'M']]

// 3-4. Object.assign(): copy an object
let newPerson = Object.assign({}, person3, { age: 31 }); // change age to 31
console.log(newPerson); 

// 3-5. Compare two objects
// objects have a large size -> store in memory address
let person4 = {
	name: "John",
	age: 30,
	gender: "M",
};

console.log(person3 === person4); // false - compare memory address
console.log(JSON.stringify(person3) === JSON.stringify(person4)); // true - compare string

// 3-6. Combine two objects
let person5 = {
    name: "John",
    age: 30,
}

let person6 = {
    gender: "M",
    isMarried: true,
}

// ES6: Spread operator ...
let perfectMan = {...person5, ...person6} 
console.log(perfectMan); 
