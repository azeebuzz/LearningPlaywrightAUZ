let a1 = 10; // State: a1 is 10

// --- PHASE 1: Post-Increment ---
let b1 = a1++;
// 1. b1 captures the CURRENT value (10)
// 2. a1 then increments to 11

console.log(b1); // Outputs: 10 (The captured value)
console.log(a1); // Outputs: 11 (The updated value after increment)

// --- PHASE 2: Pre-Increment ---
let b2 = ++a1;
// 1. a1 (which was 11) increments FIRST to 12
// 2. b2 captures the NEW value (12)

console.log(b2); // Outputs: 12 (The captured value)



