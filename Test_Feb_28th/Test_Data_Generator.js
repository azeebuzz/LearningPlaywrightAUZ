/*
As an SDET, you frequently need to generate test data for form testing.
 Write a JavaScript program that generates test user data using a for loop. 
 Each user should have a unique ID (USR-0001 format), name, email,
and role (cycling through: admin, editor, viewer, tester, manager) Every 3rd user should be inactive (edge case testing).
Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values) 

INPUT: 
Generate 8 users


OUTPUT:
USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE 
USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE 
USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE
*/
var generate = 8;
let users = ["admin", "editor", "viewer", "tester", "manager"];
const unique_ID = "USR-";
const usr_name = "TestUser_";
const email_ID = "@testingacademy.com";

if (typeof generate !== "number") {
    console.log("Invalid Data. Kindly provide the correct data");
} else {
    for (let i = 0; i < generate; i++) {
        let user_data = users[i % users.length];
        let user_status, code;
        let counter = i + 1;
        if (counter % 3 === 0) {
            user_status = "INACTIVE";
        } else {
            user_status = "ACTIVE";
        }
        if (counter < 10) code = "000";
        else if (counter < 100) code = "00";
        else if (counter < 1000) code = "0";
        else code = ""; // Could have been assigned before the start of if else. That also works
        console.log(`${unique_ID}${code}${counter} | ${usr_name}${counter} | testuser${counter}${email_ID} | ${user_data} | ${user_status}`);
    }
}