/* PROBLEM STATEMENT
Create a program that determines whether a given year is a leap year.
 A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
 Use an if-else statement to make this determination.

PSEUDO CODE
initialize a variable with any year
write an if condition to check if the year is divisible by 4 and then not divisible by 100 and then divisible by 400
else it should be non leap year */

/*let year = 2024

if (year % 4 === 0 && year % 100 !== 0) {
    console.log("It's a Leap Year");
} else if (year % 400 === 0) {
    console.log("It's a LEAP YEAR");
} else {
    console.log("It's NON LEAP YEAR");
} 
    */



let year = 800;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("It's a Leap Year");
} else {
    console.log("It's NON LEAP YEAR");
}