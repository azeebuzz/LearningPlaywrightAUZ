/*Bug Severity Classifier
As a QA engineer, classify bugs based on two factors: 
frequency ("always", "often", "rarely") and 
impact ("blocker", "major", "minor"). 
Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → "P1" | always + minor → "P2"
- often + blocker → "P1" | often + major → "P2" | often + minor → "P3"
- rarely + blocker → "P2" | rarely + major → "P3" | rarely + minor → "P4" 

Input:
frequency = "always", impact = "blocker"

Output:
Bug Title: Checkout page crashes on applying coupon 
Frequency: always 
Impact: blocker 
Severity: P0 - Critical: Stop release immediately
*/
let title = "Login page crashes on clicking submit";
let frequency = "rarely", impact = "minor";
let severity, message;

if (frequency === "always") {
    if (impact === "blocker") {
        severity = "P0";
        message = "Critical: Stop release immediately";
    } else if (impact === "major") {
        severity = "P1";
        message = "High: Fix it before sprint ends";
    } else {
        severity = "P2";
        message = "Medium: Try to fix in the next patch";
    }
} else if (frequency === "often") {
    if (impact === "blocker") {
        severity = "P1";
        message = "High: Fix it before sprint ends";
    } else if (impact === "major") {
        severity = "P2";
        message = "Medium: Try to fix in the next patch";
    } else {
        severity = "P3";
        message = "Low: Okay. Nothing urgent";
    }
} else if (frequency === "rarely") {
    if (impact === "blocker") {
        severity = "P2";
        message = "Medium: Try to fix in the next patch";
    } else if (impact === "major") {
        severity = "P3";
        message = "Low: Okay. Nothing urgent";
    } else {
        severity = "P4";
        message = "Trivial: Fix only if time permits";
    }
}
const final_result = `Bug Title: ${title}
Frequency: ${frequency}
Impact: ${impact}
Severity: ${severity} - ${message}`
console.log(final_result);