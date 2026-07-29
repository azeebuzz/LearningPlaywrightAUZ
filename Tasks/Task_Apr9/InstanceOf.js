class Vehicle { }
class Car extends Vehicle { }
class Tesla extends Car { }

let t = new Tesla();

console.log(t instanceof Tesla);
console.log(t instanceof Car);
console.log(t instanceof Vehicle);
console.log(t instanceof Object);