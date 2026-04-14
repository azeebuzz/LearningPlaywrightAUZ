0 == "" - true
0 == "0" - true
0 == false // true
null == undefined // true
"\t\n" == 0 // true

//Rule breakers
console.log(null == 0); //false
console.log(null == ""); //false
console.log(null == false); //false
console.log(undefined == ""); //false
console.log(undefined == 0); //false
console.log(undefined == false); //false
console.log(NaN == NaN); //false

console.log("" === false); // false
console.log("" == false); //true
console.log(0 === false); //false
console.log("0" == false); //true
console.log("" == "0"); //false
