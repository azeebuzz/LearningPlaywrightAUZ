let scores = [30, 28, 91, 34, 73];

// map — transforms every element, returns NEW array
let grades = scores.map(s => s > 35 ? "PASS" : "FAIL");
console.log(grades);

// filter — keeps elements that pass a test

let passing = scores.filter(s => s > 35);
console.log(passing);

// reduce — accumulates to a single value

let total = scores.reduce((sum, s) => sum + s, 0); //351
console.log(total);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());


