console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false


//=== is called strict equality operator, it checks for both value and type equality. Since null and undefined are of different types, the result is false.
// == is called loose equality operator, it performs type coercion before comparing the values. In this case, null and undefined are considered equal when using ==, so the result is true.

console.log(null == 0); // Output: false
console.log(null == ""); // Output: false
console.log(undefined == ""); // Output: false
console.log(undefined == 0); // Output: false


