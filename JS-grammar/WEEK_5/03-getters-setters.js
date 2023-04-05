// Getters and Setters
// OOP
// Class -> Object (Instance)
// Properties (in constructor)
// when changing properties, use getters and setters

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	// getter for width
	get width() {
		// with no underscore, it will be an infinite loop (ERROR: maximum call stack size exceeded)
		// underscore usually means private
		return this._width;
	}
	// setter for width
	set width(value) {
		if (value <= 0) {
			console.log("Width must be positive.");
			return;
		} else if (typeof value !== "number") {
			console.log("Width must be a number.");
			return;
		}
		this._width = value;
	}
	// getter for height
	get height() {
		return this._height;
	}
	// setter for height
	set height(value) {
		if (value <= 0) {
			console.log("Height must be positive.");
			return;
		} else if (typeof value !== "number") {
			console.log("Height must be a number.");
			return;
		}
		this._height = value;
	}

    getArea() {
        console.log(`Dimension = ${this.width} * ${this.height} = ${this.width * this.height}`);
    }
}

const rectangle1 = new Rectangle(10, 5);
rectangle1.getArea();
const rectangle2 = new Rectangle(20, 10);
rectangle2.getArea();
