class Base {
    greet() {
        return "Hello";
    }
}

class Child extends Base {
    greet() {
        return super.greet() + " World";
    }
}

console.log(new Child().greet());