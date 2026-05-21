/*After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
Print a test report with total tests, counts, pass rate percentage, and 
a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).


✅ Step 1: Array with strings — correct
✅ Step 2: Multiple counters (one for each type) — correct
✅ Step 3: Loop through items, check with if-else — correct approach
✅ Step 4: Use .length for total count — correct
✅ Step 5: Print/save results — correct
✅ Step 6: Calculate percentage — correct (but formula needs adjustment)
✅ Step 7: If/switch for verdict based on failures — correct
✅ Step 8: Multi-line string with template literals — correct

*/


const testResults = ["true"];

let passCount = 0;
let failCount = 0;
let skipCount = 0;
let naCount = 0;
let queriedCount = 0;
let total_count = 0;

for (let i = 0; i < testResults.length; i++) {
    if (typeof testResults[i] !== "string" || !isNaN(testResults[i])) {
        console.log("RESULT SHOULD ONLY BE IN WORDS");
        continue;
    } else if (testResults[i] === "pass") {
        passCount++
        total_count++;
    } else if (testResults[i] === "fail") {
        failCount++;
        total_count++;
    } else if (testResults[i] === "skip") {
        skipCount++;
        total_count++;
    } else if (testResults[i] === "not applicable") {
        naCount++;
        total_count++;
    } else if (testResults[i] === "queried") {
        queriedCount++;
        total_count++;
    } else {
        console.log("Data Not Supported");
    }
}

let passRate = passCount / (passCount + failCount) * 100;
let verdict;

if (total_count === 0) {
    console.log("TEST RUN INVALID: No valid test data was processed.");
} else {
    switch (true) {
        case testResults.length === 0:
            verdict = "NO Results to show. Kindly check your test runs.";
            break;
        case Number.isNaN(passRate):
            verdict = "No Pass or Failures. Need to revamp the testcases";
            break
        case passCount >= 1 && failCount === 0:
            verdict = "All passed -> Ready for release";
            break;
        case failCount <= 2 && passCount > 0:
            verdict = "Minor failures -> Review before release";
            break;
        case failCount > 2 || (failCount > 0 && passCount === 0):
            verdict = "Major failures -> Block the release";
            break;
        default:
            verdict = "Unknown Data";
    }

    console.log(`Total Tests: ${total_count}
Passed: ${passCount}
Failed: ${failCount}
Skipped: ${skipCount}
Not Applicable: ${naCount}
Queried: ${queriedCount}
Pass Rate: ${(Math.round(passRate * 100) / 100)}
VERDICT: ${verdict} `);

}