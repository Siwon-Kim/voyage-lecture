// Static method
// used when we don't need to create an instance of the class
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}

console.log(Calculator.add(1, 2));
console.log(Calculator.subtract(1, 2));