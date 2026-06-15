let suite1 = [{ name: "login", status: "pass" }];
//let suite2 = JSON.parse(JSON.stringify(suite1));
let suite2 = structuredClone(suite1);
suite2[0].status = "fail";
console.log(suite1[0].status);

/* Shallow copy doesn't work with objects inside array as it comes under the category of nested data structure.
Deep copy would be the solution for this. Either use old method or modern method */