/*Total Requests: 6 
Min Response: 120ms 
Max Response: 620ms 
SLA Breaches: 2 (33.33%) 
Overall Status: ❌ SLA VIOLATED 

As a performance tester, you collect 
API response times in milliseconds. Write a JavaScript program using a while loop that analyzes
 an array of response times and prints a performance report with min, max, average, 
 and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.

*/

let responseTimes = ["1", 100, 501, 800];
let i = 0, min = Infinity, max = -Infinity, SLA_BREACH = 0, total = 0;
const SLA_LIMIT = 500;
let ovr_status = "✅SLA MET";
let validCount = 0;
let report;


if (responseTimes.length === 0) {
    console.log("NO DATA AVAILABLE");
} else {
    while (i < responseTimes.length) {
        if (typeof responseTimes[i] !== "number" || Number.isNaN(responseTimes[i])) {
            console.log("INVALID DATA NOT A NUMBER");
        } else {
            validCount++;
            if (responseTimes[i] > 500) {
                ovr_status = "❌SLA VIOLATED";
                SLA_BREACH++;
            }
            if (responseTimes[i] < min) {
                min = responseTimes[i];
            }
            if (responseTimes[i] > max) {
                max = responseTimes[i];
            }
            (total += responseTimes[i]);
        }
        i++;
    }
    if (min === Infinity) {
        console.log("No valid numeric data to generate a report");
    } else {
        report = console.log(`Total Requests: ${responseTimes.length}
Min Response: ${min}ms
Max Response: ${max}ms
Avg Response: ${(total / validCount).toFixed(2)}ms
SLA Breaches: ${SLA_BREACH} (${((SLA_BREACH / validCount) * 100).toFixed(2)}%)
Overall Status: ${ovr_status}`);
    }
}