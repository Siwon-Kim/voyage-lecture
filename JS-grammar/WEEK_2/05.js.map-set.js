// Map and Set
// even though there are many features we can utilize in JS such as object, array, etc
// it is still hard to reflect the real world
// thus, map and set data structures have been introduced to JS

// Purpose: to deal with organizing, searching, and using data in a more efficient way

// 1. Map
// - key-value pair
// - any data type of key can be used
// - map saves the insertion order of the keys
// - features: search, add, delete, iterate

// Methods:
// - new Map() – create map
// - map.set(key, value) – store value by using key
// - map.get(key) – return the value of key (if key doesn't exist, return undefined)
// - map.has(key) – if key exists, return true, otherwise return false
// - map.delete(key) – delete the value of key
// - map.clear() – clear all the data in map
// - map.size – return the size of map

// map is for dealing with the massive data
// so, the iteration is important
// Iteration Methods: keys(), values(), entries()
const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

console.log(myMap.keys()); // MapIterator {"one", "two", "three"}

// for of: the way to iterate through the map
for (const key of myMap.keys()) {
	console.log(key);
}

console.log(myMap.values()); // MapIterator {1, 2, 3}

for (const value of myMap.values()) {
	console.log(value);
}

console.log(myMap.entries()); // MapIterator {"one" => 1, "two" => 2, "three" => 3}

for (const entry of myMap.entries()) {
	console.log(entry);
}

console.log(myMap.size()); // 3
console.log(myMap.has("one")); // true


// 2. Set
// - a collection of "unique" values
// - only values are stored, not keys
// features: search, add, delete, clear, exists

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // duplicate value is ignored

console.log(mySet.size); // 3
console.log(mySet.has(1)); // true

// Iteration
for (const value of mySet.values()) {
    console.log(value);
}