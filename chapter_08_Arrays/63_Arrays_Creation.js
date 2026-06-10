// Array
// Indices - 0, 1, 2

let fruits = []; //Empty array
let fresh_fruits = ["apple", "banana", "cherry"];
console.log(fresh_fruits[0]); // apple

let arr = [10, 20, 30, 40];
console.log(arr.length); // 4
console.log(arr[0]); // 10
console.log(arr[3]); // 40
console.log(arr[4]); // undefined


let testResults = ["pass", "fail", "pass", "skip"]; // Duplicate items allowed
let mixed = [1, "hello", true, null]; // JS arrays can hold any type

let browsers = ["chrome", "safari", "firefox"];


// Array constructor
let scores = new Array(5); // Creates empty array of size 5
let scores2 = new Array(1, 2, 3, 4, 5); //Creates [1, 2, 3]

let numbers = new Array(100, 200, 300, 400);
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);//0-4: 5
console.log(test);
console.log(test[0]);

// Array.from()
let chars = Array.from("hello"); // ["h", "e", "l", "l", "o"]



