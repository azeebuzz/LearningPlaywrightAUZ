"use strict";
class TCFetch {
    testName;
    priority;
    constructor(name, priority) {
        this.testName = name;
        this.priority = priority;
    }
    getPriority() {
        console.log(`The Priority of the TC ${this.testName} is: ${this.priority} `);
    }
    assignTC() {
        return `TC Assigned`;
    }
}
let tc1 = new TCFetch("Download Successful", "P1");
tc1.getPriority();
console.log(`${tc1.assignTC()}`);
