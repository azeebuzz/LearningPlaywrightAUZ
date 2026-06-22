let url = " https://staging.myapp.com/dashboard";
console.log(url.includes("staging")); //true
console.log(url.startsWith("https")); //false 
console.log(url.endsWith("/dashboard")); //true


console.log("---------------------------------------");
let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";
let status = log.match(/Status: (\d+)/)[1];
console.log(status);
// Output: 500



console.log("---------------------------------------");
let env = "staging";
let testModule = "auth";
let count = 7;
let testId = `${env}_${testModule}_${String(count).padStart(3, "0")}`;
console.log(testId);

//Output: staging_auth_007

console.log("---------------------------------------");
let actual = " PASS ";
let expected = "pass";
console.log(actual.trim().toLowerCase() === expected);

//Output: True

console.log("---------------------------------------");
let testUrl = " https://app.com/search?query=login&page=2&sort=asc";
let params = Object.fromEntries(testUrl.split("?")[1].split("&").map(p => p.split("=")));
console.log(params);
//Output: { query: 'login', page: '2', sort: 'asc' }

console.log("---------------------------------------");
let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret";
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked);

//Output: Bearer *** REDACTED ***
