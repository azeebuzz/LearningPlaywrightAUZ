// var - function scoped variable

var a = 10 // Global variable

console.log(a)

// Defining a function
function printHello() {
    console.log("Hello Azeeb in var")
    var a = 20 // Local variable
    console.log(a)
    if (true) {
        var a = 30
        console.log(a)
    }
    console.log("var -> " + a)
}
printHello() //calling the function

//var allows redeclaration of the same variable in the same scope
//var a = 50 // This will not throw an error because 'a' is redeclared in the same scope

//let - block scoped variable
let b = 20 // Global variable
console.log(b)

function printHelloLet() { // Defining a function
    console.log("Hello Azeeb in Let")
    let b = 30 // Local variable
    console.log(b)
    if (true) {
        let b = 40
        console.log(b)
    }
    console.log("Let -> " + b)

}
printHelloLet() //calling the function

//let doesn't allow redeclaration of the same variable in the same scope
//let b = 50 
//let b = 50 
// This will throw an error because 'b' is already declared in the same scope

//let b = 10
//b = 20 // this is allowed because 'b' is not a constant and can be reassigned
//console.log(b)



//const pi = 3.14 // Constant variable
//console.log(pi)
//pi = 3.20 // This will throw an error 

 
//var allows redeclaration and is function scoped and can be reassigned
//let does not allow redeclaration and is block scoped, but can be reassigned
//const does not allow redeclaration and is block scoped and cannot be reassigned

