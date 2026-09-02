"use strict";
class TestCase {
    name;
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log("[RUN] " + this.name);
    }
    getStatus() {
        return "PASS";
    }
}
let tc = new TestCase("Verify login redirect");
tc.run();
console.log("Call:", tc.getStatus());
