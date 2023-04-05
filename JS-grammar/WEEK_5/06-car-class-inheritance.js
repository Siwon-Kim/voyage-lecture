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
const car2 = new Car("Sonata", 2018, "Sedan", 4000);
car1.makeNoise();
car1.getModelYear();
car2.makeNoise();
car2.getModelYear();

class ElectricCar extends Car {
    constructor(modelName, modelYear, price, batteryCapacity) {
        super(modelName, modelYear, 'Electric Car', price);
        this.batteryCapacity = batteryCapacity;
    }

    chargeBattery() {
        console.log(`${this.modelName} is charging...`);
    }
}

const electricCar1 = new ElectricCar("Kona", 2019, "SUV", 5000, 100);
const electricCar2 = new ElectricCar("Tesla", 2018, "SUV", 9000, 100);
electricCar1.makeNoise();
electricCar1.chargeBattery();
electricCar2.makeNoise();
electricCar2.chargeBattery();