"use strict";
class BaseTest {
    setup() {
        console.log("[BASE] Open browser");
    }
    teardown() {
        console.log("[BASE] Close browser");
    }
}
class LoginTest extends BaseTest {
    setup() {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}
class APITest extends BaseTest {
    setup() {
        console.log("[APITest] No Browser!");
    }
}
let test = new LoginTest();
let apitest = new APITest();
test.setup();
apitest.setup();
