class Shape {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.w = w;
        this.h = h;
    }

    area() {
        return this.w * this.h;
    }
}

let r = new Rectangle(5, 3);
console.log("Area:", r.area());