"use strict";
class Father {
    home() {
        console.log("2BHK");
    }
}
class Pramod extends Father {
    home() {
        console.log("3BHK");
    }
}
let pramod = new Pramod();
pramod.home();
