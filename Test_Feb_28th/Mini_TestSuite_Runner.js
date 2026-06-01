// Array with the data
const testCase = [{
    name: "Status code is 400",
    actual: 400,
    expected: 400,
    type: "strictEqual"
},
{
    name: "OTA should update in 40 mins",
    actual: 40,
    expected: 40,
    type: "strictEqual"
},
{
    name: "To reset the device it needs 30% battery level",
    actual: "30",
    expected: 30,
    type: "looseEqual"
},
{
    name: "Build version should be a number",
    actual: "100",
    expected: "number",
    type: "typeCheck"
},
{
    name: "After OTA installation, device version must be updated",
    actual: false,
    expected: true,
    type: "truthy"
},
{
    name: "Device shouldn't update when battery is less than 30%",
    actual: 31,
    expected: 30,
    type: "lessThan"
},
{
    name: "Device sh",
    actual: 30,
    expected: 40,
    type: "hello"
}];

// Variables initialized
var count = 0;
let passCount = 0, failCount = 0, errorCount = 0, consPass = 0, firstFail = "No failures detected", maxConsPass = 0, reason = "", overall = "";
let code = 0;

// to run the loop throughout the array
for (let i = 0; i < testCase.length; i++) {
    let items = testCase[i];
    count++;

    // Step 1: Catch completely missing name properties (undefined)
    let rawName = items.name ?? "Untitled Test Case";

    // Step 2: Catch properties that exist but are blank text ("")
    let finalName = rawName || "Missing TC Name String";

    // Conditions for counting number of total, pass, fail, error and also capture their relevant status for future use.
    if (items.type !== "strictEqual" && items.type !== "looseEqual" && items.type !== "typeCheck" && items.type !== "truthy" && items.type !== "lessThan") {
        errorCount++;
        items.status = "error";
        reason = "(Unknown Data)";
    } else {
        switch (items.type) {
            case "strictEqual":
                reason = `(${items.actual} === ${items.expected})`;
                if (items.actual === items.expected) {
                    passCount++;
                    items.status = "passed";
                } else {
                    failCount++;
                    items.status = "failed";
                } break;
            case "looseEqual":
                reason = `(${items.actual} == ${items.expected})`;
                if (items.actual == items.expected) {
                    passCount++;
                    items.status = "passed";
                } else {
                    failCount++;
                    items.status = "failed";
                } break;
            case "typeCheck":
                reason = `(typeof "${items.actual}" === "${items.expected}") `;
                if (typeof items.actual === items.expected) {
                    passCount++;
                    items.status = "passed";
                } else {
                    failCount++;
                    items.status = "failed";
                } break;
            case "truthy":
                reason = `!!(${items.actual}) `;
                if (items.actual) {
                    passCount++;
                    items.status = "passed";
                } else {
                    failCount++;
                    items.status = "failed";
                } break;
            case "lessThan":
                reason = `(${items.actual} < ${items.expected}) `;
                if (items.actual < items.expected) {
                    passCount++;
                    items.status = "passed";
                } else {
                    failCount++;
                    items.status = "failed";
                } break;
        }
    }
    // To make code print relevant 0 or empty string based on the tc number
    code = (count < 10) ? "0" : "";

    // To print the relevant text string for different types of results.
    if (items.status === "error") {
        console.log(`❗ TC-${code}${count}: ${finalName} → ERROR ${reason}`);
    }
    else if (items.status === "passed") {
        console.log(`✅ TC-${code}${count}: ${finalName} → PASS ${reason}`);
    } else {
        console.log(`❌ TC-${code}${count}: ${finalName} → FAIL ${reason}`);
    }
}

// To get the overall status string
if (count === 0) overall = "⚠️ NO TESTS RUN";
else if (failCount === 0) overall = "✅ PASSED";
else overall = "❌ FAILED";

// For Consecutive Pass
let j = 0;
while (j < testCase.length) {
    if (testCase[j].status === "passed") {
        consPass++;
        if (consPass > maxConsPass) {
            maxConsPass = consPass;
        }
    } else if (testCase[j].status === "failed") {
        consPass = 0;
    }
    j++;
}

// For First Fail
let k = 0;
if (failCount > 0) {
    do {
        if (testCase[k].status === "failed") {
            firstFail = testCase[k].name;
            break;
        }
        k++;
    } while (k < testCase.length)
}

// Final Consolidated string
console.log(
    `\nTotal TC Count: ${count}
    Passed: ${passCount}
    Failed: ${failCount}
    Error: ${errorCount}
    Consecutive Pass: ${maxConsPass}
    First Fail: ${firstFail}
    Pass Rate: ${(passCount / (passCount + failCount) * 100).toFixed(2)}%
    Overall: ${overall}`);