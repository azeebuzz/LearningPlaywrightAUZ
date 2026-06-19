// Hoisting
// Function declarations are hoisted — 
// you can call them before they're defined. 
// Function expressions and arrow functions are NOT.

greet("Alice"); // ✅ Declaration — hoisted, works before definition


function greet(name) {
    return `Hello, ${name}!`;
}


sayHi("Bob"); // ❌ ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function (name) {
    return `Hi, ${name}!`;
};