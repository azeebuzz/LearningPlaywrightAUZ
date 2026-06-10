// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

// for...of
for (let test of tests) {
    console.log(test) // value
}
console.log("----");

// forEach
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});

console.log("----");
// for.. of loop + .entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

console.log("----");


// for in loop - loop through the keys
let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}
