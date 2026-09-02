"use strict";
const tc1 = {
    testName: "Download is successful",
    priority: "P1",
    id: 1,
    isActive: true,
};
const tc2 = {
    testName: "Download is NOT successful",
    priority: "P0",
    id: 2,
};
console.log(`TestCases are created successfully`);
console.log(`\n1st TestCase: 
    TCName: ${tc1.testName}
    Priority: ${tc1.priority}
    ID: TC-00${tc1.id}
    Test Case Active: ${tc1.isActive}`);
console.log(`\n2nd TestCase: 
    TCName: ${tc2.testName}
    Priority: ${tc2.priority}
    ID: TC-00${tc2.id}
    `);
