// W/o functions

let score1 = 85;
let result1 = score1 >= 70 ? "pass" : "fail";
console.log(result1);

let score2 = 45;
let result2 = score2 >= 70 ? "pass" : "fail";
console.log(result2);

// With Functions
function getResult(score) {
    console.log(score >= 70 ? "pass" : "fail");
}

let finalResult = getResult(70);
