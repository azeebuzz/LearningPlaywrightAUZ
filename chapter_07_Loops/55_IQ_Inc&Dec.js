let a = 10;
let b = ++a;
console.log(a);
console.log(b);

let a1 = 10;
console.log(a1++ + a1); // 21 is the answer

let a2 = 10;
console.log(a2++ + ++a2); //10 + 12 = 22 is the answer
console.log(a2); //12 is the answer

let a3 = 10;
console.log(++a3 + ++a3);//11 + 12 = 23
console.log(a3); //12

let a4 = 10;
let r = a4--;
let r2 = --a4;
console.log(r);
console.log(r2);
console.log(a4);
