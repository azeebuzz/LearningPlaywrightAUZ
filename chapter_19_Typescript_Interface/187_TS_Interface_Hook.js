"use strict";
let beforeEachHook = function (testName) {
    console.log("[BEFORE] Setting up: " + testName);
};
let afterEachHook = function (testName) {
    console.log("[AFTER] Tearing down: " + testName);
};
beforeEachHook("Login Test");
let test1 = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
};
console.log("TC-" + test1.id + ": " + test1.name + " → " + test1.status);
afterEachHook("Login Test");
