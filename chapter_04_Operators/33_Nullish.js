// Example 1: When value is null
let userName = null;
let display = userName ?? "Guest";
console.log(display);  // Output: "Guest"

// Example 2: When value exists
let userName2 = "John";
let display2 = userName2 ?? "Guest";
console.log(display2);  // Output: "John"

// Example 3: Real-world (API response)
let apiResponse = null;  // Server didn't return data
let userAge = apiResponse ?? 18;
console.log(userAge);  // Output: 18

// Example 4: With undefined
let userBio = undefined;
let displayBio = userBio ?? "No bio added";
console.log(displayBio);  // Output: "No bio added"