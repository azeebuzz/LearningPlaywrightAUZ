interface TestCase {
    testName: string;
    priority: string;
    getPriority(): void;
    assignTC(): string;
}

class TCFetch implements TestCase {
    testName: string;
    priority: string;
    constructor(name: string, priority: string) {
        this.testName = name;
        this.priority = priority;
    }
    getPriority(): void {
        console.log(`The Priority of the TC ${this.testName} is: ${this.priority} `)
    }
    assignTC(): string {
        return `TC Assigned`;
    }
}

let tc1: TestCase = new TCFetch("Download Successful", "P1");
tc1.getPriority();
console.log(`${tc1.assignTC()}`);