let a = 5;
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;

console.log(b);
console.log(a);
console.log(c);

// a = 5
// b = 5 + 7; a -> 12
// c = 7 + 9 + 10 + 11 + 11;

// b is 12
// a is 12
// c is 48

let r5 = 5;
let r8 = ++r5;
console.log(r5);
console.log(r8);