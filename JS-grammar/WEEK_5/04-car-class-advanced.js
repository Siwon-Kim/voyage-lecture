class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    get modelName() {
        return this._modelName;
    }

    set modelName(value) {
        if (value.length < 2) {
            console.log("Model name must be at least 2 characters long.");
            return;
        } else if (typeof value !== "string") {
            console.log("Model name must be a string.");
            return;
        }
        this._modelName = value;
    }

    get modelYear() {
        return this._modelYear;
    }

    set modelYear(value) {
        if (value < 1900 || value > 2020) {
            console.log("Model year must be between 1900 and 2020.");
            return;
        } else if (typeof value !== "number") {
            console.log("Model year must be a number.");
            return;
        }
        this._modelYear = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        if (value !== "SUV" && value !== "Sedan" && value !== "Coupe") {
            console.log("Type must be either SUV, Sedan, or Coupe.");
            return;
        } else if (typeof value !== "string") {
            console.log("Type must be a string.");
            return;
        }
        this._type = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value < 0) {
            console.log("Price must be positive.");
            return;
        } else if (typeof value !== "number") {
            console.log("Price must be a number.");
            return;
        }
        this._price = value;
    }
    
    makeNoise() {
        console.log(`${this.modelName} Vroom vroom!`);
    }

    getModelYear() {
        console.log(`${this.modelName} is ${this.modelYear} model year.`);
    }
}

const car1 = new Car("Palisade", 2019, "SUV", 5000);
car1.makeNoise();
car1.getModelYear();
const car2 = new Car("Sonata", 2018, "Sedan", 4000);
car2.makeNoise();
car2.getModelYear();
const car3 = new Car("Tucson", 2017, "SUV", 3000);
car3.makeNoise();
car3.getModelYear();

// getters
console.log(car1.modelName);
// setters
car1.modelName = "Soranto";
console.log(car1.modelName);