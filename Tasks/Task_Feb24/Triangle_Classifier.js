/* PROBLEM STATEMENT
Write a program that classifies a triangle based on its side lengths. 
Given three input values representing the lengths of the sides, 
determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). 
Use an if-else statement to classify the triangle*/



/* PSEUDO CODE
Have three inputs or variable declarations.
Write a condition to check if all sides are equal to each other. If Yes print it's equilateral triangle.
else write a condition to check if any two sides are equal atleast to each other. If yes print, it's isosceles triangle
write a condition to check if no sides are equal to each other. If yes print, scalene triangle
*/


let triangle_side_a = 10;
let triangle_side_b = 20;
let triangle_side_c = 10;

if (triangle_side_a === triangle_side_b && triangle_side_b === triangle_side_c) {
    console.log("Equilateral Triangle");
} else if (triangle_side_a === triangle_side_b || triangle_side_b === triangle_side_c || triangle_side_a === triangle_side_c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}