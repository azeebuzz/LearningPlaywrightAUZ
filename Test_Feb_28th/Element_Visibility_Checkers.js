/* Element Visibility Checker
In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them.
 Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and 
 prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), 
 and the ternary operator for severity level.

States: 
READY (all true), 
DISABLED (present+displayed but not enabled),
HIDDEN (present but not displayed), 
NOT FOUND (not present).
Severity:
CRITICAL (not present),   
WARNING (not displayed or not enabled), 
OK (all good).

Input:
isPresent = true, isDisplayed = true, isEnabled = false

Output:
Status: DISABLED 
Severity: WARNING 
Action: Element is visible but disabled. Wait for enable state or check preconditions.
*/

let isPresent = true, isDisplayed = false, isEnabled = true;
let state, severity, action;

severity = !isPresent ? "CRITICAL" :
    (!isDisplayed || !isEnabled) ? "WARNING" : "OKAY";
if (isPresent === true && isDisplayed === true && isEnabled === true) {
    state = "READY";
    action = "Element is good. You're good to go";
} else if (isPresent === true && isDisplayed === true && !isEnabled) {
    state = "DISABLED";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
} else if (isPresent === true && !isDisplayed) {
    state = "HIDDEN";
    action = "Element is present, but can't be displayed";
} else if (!isPresent) {
    state = "NOT FOUND";
    action = "Element doesn't exist at all";
}

const checker = `Status: ${state}
Severity: ${severity}
Action: ${action}`
console.log(checker);

