class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log(this.name + " barks");
    }
}

let d = new Dog("Rex");
d.speak();
d.bark();