/*Do while loop to be used 
Init

do {
// 
increment ++;
} while (condition satisfies);
 Max Attempts = 5;
 Math.random() to be used to generate random numbers.
 Log each result and print final output when it's done.
 Either 5 attempts or get the attempt successful when the call is success
Attempt 1: ❌ FAILED (Timeout/Error)    
Attempt 2: ✅ SUCCESS (Response 200 OK) 
API call PASSED after 2 attempt(s)
 */

const max_attempts = 5;
let random_val = 0;
let result = "FAILED"


do {
    if (Math.random() <= 0.6) {
        random_val++;
        console.log(`Attempt ${random_val}: ❌ FAILED (Timeout/Error)`);
        continue;
    } else {
        result = "PASSED";
        random_val++;
        console.log(`Attempt ${random_val}: ✅ SUCCESS (Response 200 OK)`);
        break;
    }
} while (random_val < max_attempts);
console.log(`API call ${result} after ${random_val} attempt(s)`);