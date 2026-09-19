// 1. The Abstract Parent (Contract & properties)
abstract class BaseTest {
    protected testName: string;

    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
}

// 2. The Child Class: UiTest
class UiTest extends BaseTest {
    constructor(testName: string) {
        // Passes the testName up to the BaseTest constructor
        super(testName);
    }

    // Implementing the exact 3 abstract methods
    setup(): void {
        console.log(`Setting up test: ${this.testName}`);
    }

    execute(): void {
        console.log(`Executing test: ${this.testName}`);
    }

    teardown(): void {
        console.log(`Tearing down test: ${this.testName}`);
    }
}

// 3. Completing the flow: Direct instantiation & direct calls
const myTest = new UiTest("Login Verification");

// Calling the three methods directly, one by one:
myTest.setup();
myTest.execute();
myTest.teardown();