let a = 10
console.log(a); // This will print 10

if (true) {
    console.log(a); 
    let a = 20; // This will cause a ReferenceError due to the temporal dead zone
    console.log(a); 
}