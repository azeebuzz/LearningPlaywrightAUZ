function outer() {
    let message = "Hello";
    console.log("Outer called!");

    function inner() {
        return message;
    }

    // CHANGE: We added parentheses!
    return inner();
}

let fn_inner = outer(); // <-- Boom! The action happens right here now!
console.log(fn_inner); // ❌ THIS LINE WILL CRASH!


/*

This is tutor example and above actual code is what I tried on my own
function outer() {
    let message = "Hello";
    console.log("Outer called!");

    function inner() {
        console.log(message);
    }
    return inner;

}


let fn_inner = outer();
fn_inner();

//  inner() not allowed!
*/