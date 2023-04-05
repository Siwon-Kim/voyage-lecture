class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} is speaking!`);
    }
}

const siwon = new Animal("Siwon");
siwon.speak();

// Inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    // overriding: redefined method
    speak() {
        console.log(`${this.name} is barking!`);
    }
}

const dog1 = new Dog("Bobby", "Poodle");
dog1.speak();