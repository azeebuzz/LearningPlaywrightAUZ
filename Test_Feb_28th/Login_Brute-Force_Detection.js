/*Write a JavaScript program that simulates a login system with brute-force detection.
 The system should lock the account after 3 consecutive failed attempts.
  Use a do...while loop to process login attempts from an array. 
  Demonstrate var (global counter), let (loop variables), and const (credentials and threshold).
   Validate using strict equality (===) and logical operators (&&).
   
   INPUT:
   Valid: admin@testingacademy.com / Test@1234 
   Attempts: [wrong, wrong, wrong, correct]

   OUTPUT:
   Attempt 1: ❌ FAILED - Strike 1/3 
   Attempt 2: ❌ FAILED - Strike 2/3 
   Attempt 3: ❌ FAILED - Strike 3/3 
   🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected */


const email_ID = "admin@testingacademy.com";
const password = "Test@1234";

let attempts = ["wrong", "wrong", "wrong", "correct", "correct"];

let i = 0;
var counter = 1;

do {
    if (counter > 3) {
        console.log(`🚨 ACCOUNT LOCKED Attempt ${counter}: 🔒 ACCOUNT LOCKED - Rejected`);
        counter++;
        i++;
    } else if (attempts[i] === "correct") {
        console.log(`Attempt ${counter}: ACCOUNT LOGGED IN - ✅SUCCESS`);
        break;
    } else {
        console.log(`Attempt ${counter}: ❌ FAILED - Strike ${counter}/3`);
        counter++;
        i++;
    }
} while (i < attempts.length);



