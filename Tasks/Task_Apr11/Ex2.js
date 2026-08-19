"use strict";
function countPassedTests(results) {
    let count = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "PASS")
            count++;
    }
    return count;
}
function printTestSummary(total, passed) {
    console.log("Passed: " + passed + "/" + total);
    console.log("Failed: " + (total - passed) + "/" + total);
}
let results = ["PASS", "FAIL", "PASS", "PASS", "FAIL"];
let passed = countPassedTests(results);
printTestSummary(results.length, passed);
