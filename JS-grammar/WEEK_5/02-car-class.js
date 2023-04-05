class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
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