let count = 42;
let negative = -10;
let zero = 0; // numeric literal

let hex = 0xFF0000; // hexadecimal 

let octal = 0o755; // octal
let pi = 3.14159; // floating-point number
let million = 1e6; // scientific notation
let tiny = 1e-6; // small number in scientific notation

let binary = 0b1010; // binary
let bigInt = 9007199254740991n; // BigInt literal

let string = "He's a programmer."; // string literal with an apostrophe
let string1 = 'She said, "Hello!"'; // string literal with double quotes


let person = "Azeeb"; // string literal
let greeting = `Hello, ${person}. How are you?`; // template literal

console.log(greeting); // Output: Hello, Azeeb. How are you?

let math = `2 + 2 = ${2 + 2}`;
console.log(math); // Output: 2 + 2 = 4


// To store path of the file using double backslashes
let filePath = `C:\\Users\\Azeeb\\Documents\\file.txt`;
console.log(filePath); // Output: C:\Users\Azeeb\Documents\file.txt

//To store path using template literals
let filePathTemplate = `C:\\Users\\${person}\\Documents\\file.txt`;
console.log(filePathTemplate); // Output: C:\Users\Azeeb\Documents\file.txt

//To store path using String.raw
let filePathRaw = String.raw`C:\Users\ ${person}\Documents\file.txt`;
console.log(filePathRaw); // Output: C:\Users\ Azeeb\Documents\file.txt

let filePathRaw1 = String.raw`C:\Users\${person}\Documents\file.txt`;
console.log(filePathRaw1); // Output: C:\Users\${person}\Documents\file.txt

let address = "https://www.example.com/login";
console.log(address);

//String literals
let empty = ""; // empty string literal
let space = " "; // string literal with a space character
let zero1 = "0"; // string literal representing the character '0'


//Boolean literals
let isLoggedIn = true; // boolean literal representing true
let isLoggedOut = false; // boolean literal representing false

