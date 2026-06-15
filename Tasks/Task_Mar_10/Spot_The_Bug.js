let responseTimes = [320, 5, 1200, 450, 99];
let sorted = responseTimes.sort((a, b) => a - b); // This method calculates based on ascending order
console.log(sorted);
console.log("Fastest:", sorted[0]);

/* Issue was that the usual sort() would check for the first element based on alphabetical order
so due to that the numbers are not arranged in numerical order */
